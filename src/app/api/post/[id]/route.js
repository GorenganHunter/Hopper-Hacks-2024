import postModel from "@/models/post";
import dbConnect from "@/utils/mongoose";
import { isValidObjectId } from "mongoose";
import { NextRequest } from "next/server";

/**
 * @param {NextRequest} req
 */
export async function GET(req, { params }) {
  const id = params.id
  if(!isValidObjectId(id)) return Response.json({ post: null })
  await dbConnect()
  const post = await postModel.findById(id).lean()
  return Response.json({ post })
}
