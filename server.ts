Deno.serve((req: Request) => {
  // Create a URL object from the request URL string
  const url = new URL(req.url);

  // Access the URLSearchParams object
  const params = url.searchParams;

  // Get specific parameters
  const url2 = params.get("url");
  console.log(url)
  return Response.redirect("http://" + url2, 302);
});