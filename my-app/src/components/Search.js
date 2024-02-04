"use client";
import "bootstrap/dist/css/bootstrap.min.css";
import { useRouter } from "next/navigation"

function Search() {
  const router = useRouter()
  const handleSearch = () => {
    const searchTerm = document.getElementById("searchInput").value.trim();
    if (searchTerm !== "") {
      // Construct the search URL
      //const searchURL = `/api/post?search=${encodeURIComponent(searchTerm)}`;
      router.push("/search?q=" + encodedURIComponent(searchTerm))
      // const response = await fetch(searchURL);
      // Redirect to the search URL
      // window.location.href = searchURL;
    }
  };

  // Function to handle key press
  const handleKeyPress = (e) => {
    // If Enter key is pressed (keyCode 13)
    if (e.key === "Enter") {
      handleSearch();
    }
  };
  return (
    <>
      <input
        id="searchInput"
        className="form-control p-3 mb-4 mt-4"
        placeholder="Search"
        onKeyPress={handleKeyPress}
      />
    </>
  );
}

export default Search;
