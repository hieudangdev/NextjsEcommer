import { options } from "@/app/api/auth/[...nextauth]/options";
import { getServerSession } from "next-auth";


export function getSession() {
    return getServerSession(options)
}
export async function getCurrenUser() {
    
    const session = await getSession()
    return session?.user
}