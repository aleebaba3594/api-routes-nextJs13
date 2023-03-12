import { NextResponse } from "next/server";

export async function GET(request: Request, { params }) {
  //data is the same name which we use in parent folder of this file
  const id = params.data[0];
  // we can get the data from params
  const id1 = params.data[1];
  const id2 = params.data[2];

  return NextResponse.json({ status: "success", id, id1, id2 });
}
