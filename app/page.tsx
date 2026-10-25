import HomeTemplate from "@/components/templates/HomeTemplate";

// Re-render daily so the years-of-experience stat stays current.
export const revalidate = 86400;

export default function HomePage() {
  return <HomeTemplate />;
}
