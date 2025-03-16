"use server";
import { redirect } from "next/navigation";

export async function passToAI(formData: FormData) {
  console.log(formData);
  let res = await fetch("http://backend:8000/scorespeech", {
    method: "POST",
    body: formData,
  });

  const queryParams = new URLSearchParams(await res.json()).toString();
  console.log(queryParams);

  redirect(`/results?${queryParams}`);
}
