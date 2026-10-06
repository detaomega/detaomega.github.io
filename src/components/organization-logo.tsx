import Image from "next/image";
import { organizations, type OrganizationId } from "@/content/profile";

export function OrganizationLogo({
  organization,
}: {
  organization: OrganizationId;
}) {
  const item = organizations[organization];
  return (
    <span className={`organization-logo organization-logo-${organization}`}>
      <Image src={item.logo} alt={`${item.name} logo`} width={64} height={64} />
    </span>
  );
}
