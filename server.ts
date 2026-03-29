Deno.serve((req: Request) => {
  // Create a URL object from the request URL string
  const url = new URL(req.url);

  // Access the URLSearchParams object
  const params = url.searchParams;

  // Get specific parameters
  const flag = params.get("flag");
  console.log(flag)
  return Response.redirect("http://debug/", 302);
});