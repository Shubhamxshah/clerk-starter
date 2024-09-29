import { UserButton } from "@clerk/nextjs";

export default function Home() {
  return (
    <div className="flex flex-col font-[family-name:var(--font-geist-sans)]">
      <p> only authenticated users can see this! </p>
      <UserButton />
    </div>
  );
}
