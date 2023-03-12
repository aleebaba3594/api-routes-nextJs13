
import { usePathname } from 'next/navigation';
import { NextResponse } from 'next/server'
export async function GET(request: Request) {
    // const pathname = usePathname()
    // console.log(pathname)
    return new Response('wao')
  }
  