import { readFile } from "node:fs/promises";
import { resolve } from "node:path";

const root = new URL("../", import.meta.url);
const page = await readFile(new URL("pilot.qmd", root), "utf8");
const form = await readFile(new URL(".github/ISSUE_TEMPLATE/public-data-readiness-pilot.yml", root), "utf8");

for (const phrase of [
  "공개 GitHub 양식입니다. 결제나 상담 신청이 아닙니다.",
  "아직 제공 중인 서비스가 아닙니다.",
  "서비스 주문서가 아닙니다.",
  "API 키, 비공개 URL, 요청·응답 원문, 회사명, 개인 연락처를 받지 않습니다.",
  "결제, 예약, 계약, SLA, 고객지원 또는 납품을 약속하지 않습니다.",
  "2026년 9월 4일 KST",
  "issues/new?template=public-data-readiness-pilot.yml",
]) {
  if (!page.includes(phrase)) throw new Error(`Missing public pilot boundary: ${phrase}`);
}

for (const id of ["integration_stage", "main_blocker", "desired_output", "pilot_interest", "price_reaction", "public_boundary"]) {
  if (!form.includes(`id: ${id}`)) throw new Error(`Missing required pilot field: ${id}`);
}
if (form.includes("type: input") || form.includes("type: textarea")) {
  throw new Error("The pilot form must not request free-text responses.");
}
for (const phrase of [
  "제목을 바꾸거나",
  "API 키·비공개 URL·요청/응답 원문·회사명·개인 연락처",
  "서비스 주문·결제·상담 신청이 아닙니다.",
  "결제·예약·계약이 아닙니다.",
]) {
  if (!form.includes(phrase)) throw new Error(`Missing form safety copy: ${phrase}`);
}
console.log(`verified ${resolve(root.pathname, "pilot.qmd")}`);
