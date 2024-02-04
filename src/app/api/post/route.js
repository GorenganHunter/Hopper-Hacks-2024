import { getServerSession } from "next-auth/next";
import { authOptions } from "@/utils/auth";
import { NextRequest } from "next/server";
import dbConnect from "@/utils/mongoose";
import postModel from "@/models/post";

/**
 * @param {NextRequest} req
 */
export async function GET(req) {
  const query = req.nextUrl.searchParams.get("search");
  if (!query)
    return Response.json(
      {
        message: "You must specify query first!",
      },
      {
        status: 500,
      }
    );
  await dbConnect();
  const posts = await postModel
    .find({
      title: { $regex: query, $options: "i" },
    })
    .lean();
  return Response.json({ posts });
}

/**
 * @param {NextRequest} req
 */
export async function POST(req) {
  const body = await req.json();
  // biarin dulu ini buat ngetes body nya masuk apa kagak
  //ngetest tadi apakah bisa json atau kagak ternyata sama aje
  const { title, content, youtube } = body;
  if (!title)
    return Response.json(
      {
        message: "title cannot be empty!",
      },
      {
        status: 500,
      }
    );
  if (!content)
    return Response.json(
      {
        message: "content cannot be empty!",
      },
      {
        status: 500,
      }
    );
  const session = await getServerSession(authOptions);
  if (!session)
    return Response.json(
      {
        message: "You must login before do this!",
      },
      {
        status: 401,
      }
    );
  await dbConnect();
  const post = await postModel.create({
    title,
    content,
    author: session.user.name,
    youtube,
  });
  return Response.json({ post });
}
