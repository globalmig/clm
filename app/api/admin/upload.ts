import type { NextApiRequest, NextApiResponse } from "next";
import { createRouteHandlerClient } from "@supabase/auth-helpers-nextjs";
import formidable from "formidable";
import { cookies } from "next/headers";
import fs from "fs";

export const config = {
  api: {
    bodyParser: false, // FormData를 직접 처리하기 위해 필요
  },
};

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const supabase = createRouteHandlerClient({ cookies });

  if (req.method !== "POST") return res.status(405).end();

  const form = formidable();

  form.parse(req, async (err, fields, files) => {
    if (err) return res.status(500).json({ error: "폼 파싱 실패" });

    const type = fields.type?.[0];
    const title = fields.title?.[0];
    const file = files.file?.[0];

    if (!type || !title || !file) {
      return res.status(400).json({ error: "필수 항목 누락" });
    }

    const buffer = fs.readFileSync(file.filepath);
    const filePath = `${type}/${Date.now()}_${file.originalFilename}`;

    const { data, error } = await supabase.storage
      .from("your-bucket-name") // 저장소 이름
      .upload(filePath, buffer, {
        contentType: file.mimetype || undefined,
      });

    if (error) {
      return res.status(500).json({ error: "파일 업로드 실패" });
    }

    const publicUrl = supabase.storage.from("your-bucket-name").getPublicUrl(filePath).data.publicUrl;

    // 테이블에 삽입
    const tableName = type === "intro" ? "product_intro" : type === "option" ? "product_option" : "product_video";

    await supabase.from(tableName).insert([
      {
        title,
        file_url: publicUrl,
      },
    ]);

    return res.status(200).json({ success: true });
  });
}
