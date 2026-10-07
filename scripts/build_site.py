#!/usr/bin/env python3
"""Render static pages with a shared header and footer. No dependencies."""
import json
from html import escape
from pathlib import Path

ROOT = Path(__file__).resolve().parent.parent
PAGES = [
    {"page": "home", "route": "/", "label": "Home", "zh": "首頁", "title": "Ping-Yu Yang | Software Engineering & Semantic Communication", "title_zh": "Ping-Yu Yang｜軟體工程與語意通訊研究", "description": "Ping-Yu Yang — NTU communication research and incoming NVIDIA GPU System Engineer (RDSS Intern). Projects and past internships at TSMC, Microsoft, and Logitech."},
    {"page": "about", "route": "/about/", "label": "About", "zh": "關於", "title": "About Ping-Yu Yang | Education & Research", "title_zh": "關於 Ping-Yu Yang｜學歷與研究", "description": "Meet Ping-Yu Yang (detaomega): NTU CSIE student, NYCU computer science graduate, semantic communication researcher, and incoming NVIDIA GPU System Engineer (RDSS Intern)."},
    {"page": "projects", "route": "/projects/", "label": "Projects", "zh": "專案", "title": "Projects · Ping-Yu Yang", "title_zh": "專案 · Ping-Yu Yang", "description": "Selected projects by Ping-Yu Yang: AI-generated jazz drum comping and a full-stack meal ordering platform."},
    {"page": "experience", "route": "/experience/", "label": "Experience", "zh": "經歷", "title": "Experience · Ping-Yu Yang", "title_zh": "工作經歷 · Ping-Yu Yang", "description": "Ping-Yu Yang's incoming GPU System Engineer (RDSS Intern) role at NVIDIA and previous engineering internships at TSMC, Microsoft, and Logitech."},
]

def nav(current, active):
    return "\n".join(f'<a href="{page["route"]}" data-zh="{page["zh"]}"' + (' class="active" aria-current="page"' if active and page["page"] == current else "") + f'>{page["label"]}</a>' for page in PAGES)

def structured_data(page):
    person = {
        "@type": "Person", "@id": "https://detaomega.github.io/#person",
        "name": "Ping-Yu Yang", "alternateName": "detaomega",
        "url": "https://detaomega.github.io/",
        "image": "https://detaomega.github.io/assets/profile.jpg",
        "description": PAGES[1]["description"],
        "email": "mailto:detaomega19@gmail.com",
        "sameAs": ["https://github.com/detaomega", "https://www.linkedin.com/in/ping-yu-yang-38b34424a/"],
        "knowsAbout": ["Software Engineering", "Semantic Communication", "Deep Learning", "Wireless Communication"],
        "alumniOf": {"@type": "CollegeOrUniversity", "name": "National Yang Ming Chiao Tung University"},
        "affiliation": {"@type": "CollegeOrUniversity", "name": "National Taiwan University"},
        "mainEntityOfPage": "https://detaomega.github.io/about/",
    }
    graph = [person, {
        "@type": "WebSite", "@id": "https://detaomega.github.io/#website",
        "name": "Ping-Yu Yang", "url": "https://detaomega.github.io/",
        "inLanguage": ["en", "zh-Hant"], "author": {"@id": person["@id"]},
    }]
    if page["page"] == "about":
        graph.append({
            "@type": "ProfilePage", "@id": "https://detaomega.github.io/about/#profile",
            "url": "https://detaomega.github.io/about/", "name": page["title"],
            "isPartOf": {"@id": "https://detaomega.github.io/#website"}, "mainEntity": person,
        })
    return json.dumps({"@context": "https://schema.org", "@graph": graph}, ensure_ascii=False).replace("<", "\\u003c")

def build():
    template = (ROOT / "templates/base.html").read_text(encoding="utf-8")
    for page in PAGES:
        content = (ROOT / "content" / f'{page["page"]}.html').read_text(encoding="utf-8")
        values = {key: escape(value, quote=True) for key, value in page.items()}
        values.update(content=content, structured_data=structured_data(page), navigation=nav(page["page"], True), footer_navigation=nav(page["page"], False))
        html = template
        for key, value in values.items():
            html = html.replace("{{ " + key + " }}", value)
        assert "{{ " not in html, "Unresolved template value"
        output = ROOT / page["route"].strip("/") / "index.html"
        output.parent.mkdir(parents=True, exist_ok=True)
        output.write_text(html, encoding="utf-8")
        print("Rendered", output.relative_to(ROOT))
    urls = "".join(f'<url><loc>https://detaomega.github.io{page["route"]}</loc></url>' for page in PAGES)
    (ROOT / "sitemap.xml").write_text('<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">' + urls + '</urlset>\n', encoding="utf-8")

if __name__ == "__main__":
    build()
