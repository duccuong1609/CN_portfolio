import { NextResponse } from "next/server";
import axios from "axios";
import { REPOSITORY_LINK } from "@/config/constant-setting";

export async function GET() {
  try {
    const response = await axios.get(REPOSITORY_LINK);
    return NextResponse.json(response.data);
  } catch (error) {
    return NextResponse.json({ error: "Failed to fetch data" }, { status: 500 });
  }
}