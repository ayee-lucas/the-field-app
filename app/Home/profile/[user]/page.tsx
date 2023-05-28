import { redirect } from "next/navigation";


export default async function Page({ params }: { params: { user: string } }) {
  redirect(`/Home/profile/${params.user}/recent/`)
  return (
    <div>:  (</div>

  );
}
