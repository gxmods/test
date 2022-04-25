// search index for WYSIWYG Web Builder
var database_length = 0;

function SearchPage(url, title, keywords, description)
{
   this.url = url;
   this.title = title;
   this.keywords = keywords;
   this.description = description;
   return this;
}

function SearchDatabase()
{
   database_length = 0;
   this[database_length++] = new SearchPage("index.html", "GX MODS TEST - Home", "GX MODS  by Gexoty  Home  WARNING!!!  The test version WebSite  Back to normal WebSite  -   ", "");
   return this;
}
