import Link from 'next/link';

export default function HomePage() {
  return (
    <div className="flex flex-col justify-center text-center flex-1 gap-4">
      <h1 className="text-3xl font-semibold tracking-tight">CipherOwl Dataroom</h1>
      <p className="text-fd-muted-foreground">
        Open{' '}
        <Link href="/docs" className="font-medium underline text-fd-foreground">
          /docs
        </Link>{' '}
        to browse the documents.
      </p>
    </div>
  );
}
