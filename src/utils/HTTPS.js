export default async function GET() {
  const res = await fetch("https://api.npoint.io/b7ebdae8a3f320790b47");
  const data = await res.json();
  return await data
}