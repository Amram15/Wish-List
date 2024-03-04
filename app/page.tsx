// 'use client'
// import { useRouter } from "next/navigation";

// export default function index(){
//     const router = useRouter();
//     router.push("/signin");

//     return (
//         <div>Loading...</div>
//     )
// }

'use client';
import { signOut, useSession } from 'next-auth/react';
import { redirect } from 'next/navigation';

export default function Home() {
  const { data: session, status } = useSession({
    required: true,
    onUnauthenticated() {
      redirect('/signin');
    },
  });

  if (status === 'loading') {
    return <div>Loading...</div>;
  }

  if (!session) {
    return null;
  }

  return (
   <></>
  );
}

Home.requireAuth = true;

