import MovieCard from '../components/MovieCard.jsx'
import {useState, useEffect} from "react"
import "../css/Home.css"

function Home(){

    const [searchQuery, setSearchQuery] = useState("");
    const [movies, setMovies] = useState([]);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const loadPopularMovies = async() => {
            try{
                const popularMovies = await getPopularMovies()
                setMovies(popularMovies)
            }
            catch(err){
                console.log(err)
                setError("Failed to load movies...")
            }
            finally{
                setLoading(false)
            }
        }
        loadPopularMovies()
    }, [])

const handleSearch = (e) => {
    e.preventDefault()
    alert(searchQuery)
    setSearchQuery("")
}

    return <div className="home">
        <h1 className="heading">Portfolio</h1>
        <div className="category-filters">
  <button className="filter-button">All</button>
  <button className="filter-button">Pre Sarfaesi</button>
  <button className="filter-button">NPA</button>
  <button className="filter-button">13(3) Responses</button>
  <button className="filter-button">Symbolic Possession</button>
  <button className="filter-button">DM Order</button>
  <button className="filter-button">Physical Possessions</button>
  <button className="filter-button">Auctions</button>
</div>

        <form onSubmit={handleSearch} className="search-form">
            <input 
            type="text" 
            placeholder="Search Loan Number" 
            className="search-input" 
            value = {searchQuery}
            onChange = {(e) => {setSearchQuery(e.target.value)}}
            />
  <div className="dropdown-container">
    <select className="search-dropdown">
      <option value="">Filter 1</option>
      <option value="option1">Option 1</option>
      <option value="option2">Option 2</option>
    </select>

    <select className="search-dropdown">
      <option value="">Filter 2</option>
      <option value="optionA">Option A</option>
      <option value="optionB">Option B</option>
    </select>
  </div>
        </form>
        <div className="loan-status-container">
  <p className="loan-status">0 Loans Selected</p>
</div>
<div className="loan-table-container">
  <table className="loan-table">
    <thead>
      <tr>
        <th>Loan Number</th>
        <th>Loan Type</th>
        <th>Borrower</th>
        <th>Borrower Address</th>
        <th>Co-Borrower 1 Name</th>
        <th>Co-Borrower 1 Address</th>
        <th>Current DPD</th>
        <th>Sanction Amount</th>
        <th>Region</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>12345</td>
        <td>Home Loan</td>
        <td>John Doe</td>
        <td>123 Street, NY</td>
        <td>Jane Doe</td>
        <td>456 Avenue, NY</td>
        <td>10</td>
        <td>$500,000</td>
        <td>East</td>
      </tr>
      <tr>
        <td>67890</td>
        <td>Car Loan</td>
        <td>Michael Smith</td>
        <td>789 Road, CA</td>
        <td>Emily Smith</td>
        <td>321 Blvd, CA</td>
        <td>5</td>
        <td>$50,000</td>
        <td>West</td>
      </tr>
    </tbody>
  </table>
</div>
        <div className="movies-grid">
        {movies.map((movie) =>             
            (<MovieCard movie={movie} key={movie.id} />)
            )}
        </div>
    </div>
}

export default Home