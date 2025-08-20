import {NextRequest, NextResponse} from 'next/server'
import {checkBotId} from "botid/server";

export async function POST(request: NextRequest) {
    const verification = await checkBotId();

    return NextResponse.json(verification)
}