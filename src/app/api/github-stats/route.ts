import { NextResponse } from "next/server";
import axios from "axios";

import { REPOSITORY_LINK } from "@/constants/settings";

export async function GET() {
  try {
    const response = await axios.get(REPOSITORY_LINK);

    return NextResponse.json(response.data);
  } catch (_error) {
    return NextResponse.json(
      { error: "Failed to fetch data" },
      { status: 500 },
    );
  }
}
