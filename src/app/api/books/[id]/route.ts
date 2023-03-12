

import { NextResponse } from 'next/server'

export async function GET(request: Request,paramData:{params: string}) {
    const id = paramData.params.id
    return NextResponse.json({ status: 'success',id })
  }
  