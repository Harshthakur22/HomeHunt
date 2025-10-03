// import { useState } from "react";
// import { useNavigate } from "react-router-dom";

// const types = ["buy", "rent"];

// function SearchBar() {
//   const navigate = useNavigate();
//   const [query, setQuery] = useState({
//     type: "buy",
//     city: "",
//     minPrice: "",
//     maxPrice: "",
//   });

//   const switchType = (val) => setQuery((prev) => ({ ...prev, type: val }));
//   const handleChange = (e) => setQuery((prev) => ({ ...prev, [e.target.name]: e.target.value }));

//   const handleSearch = (e) => {
//     e.preventDefault();
//     const { type, city, minPrice, maxPrice } = query;
//     const url = `/list?type=${type}&city=${encodeURIComponent(
//       city
//     )}&minPrice=${minPrice || 0}&maxPrice=${maxPrice || 0}`;
//     navigate(url);
//   };

//   return (
//     <div className="w-full max-w-5xl mx-auto">
//       {/* Shell */}
//       <div className="rounded-xl border border-[var(--border)] bg-surface shadow-soft/50 p-3 md:p-4">
//         {/* Toggle */}
//         <div className="flex items-center justify-center md:justify-start mb-2">
//           <div className="inline-flex rounded-full border border-[var(--border)] bg-surface2 p-1">
//             {types.map((type) => (
//               <button
//                 key={type}
//                 onClick={() => switchType(type)}
//                 aria-pressed={query.type === type}
//                 className={`px-4 py-1.5 rounded-full text-sm capitalize transition-all duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-accent ${
//                   query.type === type
//                     ? "bg-accent text-black shadow"
//                     : "text-[var(--muted)] hover:text-[var(--text)] hover:bg-[color:rgba(0,0,0,0.04)]"
//                 }`}
//               >
//                 {type}
//               </button>
//             ))}
//           </div>
//         </div>

//         {/* Inputs row */}
//         <form
//           onSubmit={handleSearch}
//           className="grid grid-cols-1 md:grid-cols-[1fr_1fr_1fr_auto] gap-2.5 items-stretch"
//         >
//           {/* City */}
//           <div className="relative">
//             <span className="pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 text-[var(--muted)]">
//               <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 10c0 7-9 13-9 13S3 17 3 10a9 9 0 1 1 18 0Z"/><circle cx="12" cy="10" r="3"/></svg>
//             </span>
//             <input
//               id="city"
//               type="text"
//               name="city"
//               placeholder="City"
//               value={query.city}
//               onChange={handleChange}
//               className="w-full pl-8 pr-3 py-2.5 rounded-lg border border-[var(--border)] bg-surface text-[var(--text)] placeholder-[var(--muted)] focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent transition"
//             />
//           </div>

//           {/* Min Price */}
//           <div className="relative">
//             <span className="pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 text-[var(--muted)]">$</span>
//             <input
//               id="minPrice"
//               type="number"
//               inputMode="numeric"
//               name="minPrice"
//               min={0}
//               placeholder="Min Price"
//               value={query.minPrice}
//               onChange={handleChange}
//               className="w-full pl-7 pr-3 py-2.5 rounded-lg border border-[var(--border)] bg-surface text-[var(--text)] placeholder-[var(--muted)] focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent transition"
//             />
//           </div>

//           {/* Max Price */}
//           <div className="relative">
//             <span className="pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 text-[var(--muted)]">$</span>
//             <input
//               id="maxPrice"
//               type="number"
//               inputMode="numeric"
//               name="maxPrice"
//               min={0}
//               placeholder="Max Price"
//               value={query.maxPrice}
//               onChange={handleChange}
//               className="w-full pl-7 pr-3 py-2.5 rounded-lg border border-[var(--border)] bg-surface text=[var(--text)] placeholder-[var(--muted)] focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent transition"
//             />
//           </div>

//           {/* Submit */}
//           <button
//             type="submit"
//             className="inline-flex items-center justify-center rounded-lg bg-accent text-black font-semibold px-4 md:px-5 py-2.5 shadow transition-all duration-200 hover:translate-y-[-1px] hover:shadow-md active:translate-y-0 whitespace-nowrap"
//             aria-label="Search properties"
//           >
//             <svg className="w-4 h-4 md:mr-1.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="11" cy="11" r="8"/><path d="m21 21-4.3-4.3"/></svg>
//             <span className="hidden md:inline">Search</span>
//           </button>
//         </form>
//       </div>
//     </div>
//   );
// }

// export default SearchBar;
import './searchBar.scss'
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const types = ["buy", "rent"];

function SearchBar() {
  const navigate = useNavigate();
  const [query, setQuery] = useState({
    type: "buy",
    city: "",
    minPrice: "",
    maxPrice: "",
  });

  const switchType = (val) => setQuery((prev) => ({ ...prev, type: val }));
  const handleChange = (e) => setQuery((prev) => ({ ...prev, [e.target.name]: e.target.value }));

  const handleSearch = (e) => {
    e.preventDefault();
    const { type, city, minPrice, maxPrice } = query;
    const url = `/list?type=${type}&city=${encodeURIComponent(
      city
    )}&minPrice=${minPrice || 0}&maxPrice=${maxPrice || 0}`;
    navigate(url);
  };

  return (
    <div className="w-full max-w-5xl mx-auto">
      {/* Shell */}
      <div className="rounded-xl border border-[var(--border)] bg-white shadow-lg p-6 md:p-8">
        {/* Toggle */}
        <div className="flex items-center justify-center md:justify-start mb-4">
          <div className="inline-flex rounded-full border border-[var(--border)] bg-surface2 p-1">
            {types.map((type) => (
              <button
                key={type}
                onClick={() => switchType(type)}
                aria-pressed={query.type === type}
                className={`px-5 py-2.5 rounded-full text-lg font-medium transition-all duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-accent ${
                  query.type === type
                    ? "bg-accent text-black shadow-lg"
                    : "text-[var(--muted)] hover:text-black hover:bg-[rgba(0,0,0,0.1)]"
                }`}
              >
                {type}
              </button>
            ))}
          </div>
        </div>

        {/* Inputs row */}
        <form onSubmit={handleSearch} className="grid grid-cols-1 md:grid-cols-4 gap-4 items-center">
          {/* City */}
          <div className="relative">
            <input
              id="city"
              type="text"
              name="city"
              placeholder="Enter City"
              value={query.city}
              onChange={handleChange}
              className="w-full pl-8 pr-4 py-3 rounded-lg border border-[var(--border)] bg-surface text-[var(--text)] placeholder-[var(--muted)] focus:outline-none focus:ring-2 focus:ring-accent transition-all duration-200"
            />
            <span className="absolute left-3 top-1/2 -translate-y-1/2 text-[var(--muted)]">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 10c0 7-9 13-9 13S3 17 3 10a9 9 0 1 1 18 0Z"/><circle cx="12" cy="10" r="3"/></svg>
            </span>
          </div>

          {/* Min Price */}
          <div className="relative">
            <span className="absolute left-3 top-1/2 -translate-y-1/2 text-[var(--muted)]">$</span>
            <input
              id="minPrice"
              type="number"
              name="minPrice"
              min={0}
              placeholder="Min Price"
              value={query.minPrice}
              onChange={handleChange}
              className="w-full pl-7 pr-4 py-3 rounded-lg border border-[var(--border)] bg-surface text-[var(--text)] placeholder-[var(--muted)] focus:outline-none focus:ring-2 focus:ring-accent transition-all duration-200"
            />
          </div>

          {/* Max Price */}
          <div className="relative">
            <span className="absolute left-3 top-1/2 -translate-y-1/2 text-[var(--muted)]">$</span>
            <input
              id="maxPrice"
              type="number"
              name="maxPrice"
              min={0}
              placeholder="Max Price"
              value={query.maxPrice}
              onChange={handleChange}
              className="w-full pl-7 pr-4 py-3 rounded-lg border border-[var(--border)] bg-surface text-[var(--text)] placeholder-[var(--muted)] focus:outline-none focus:ring-2 focus:ring-accent transition-all duration-200"
            />
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="inline-flex items-center justify-center rounded-lg bg-accent text-black font-semibold px-6 py-3 shadow-lg transition-all duration-200 hover:scale-105 hover:shadow-xl active:scale-100"
            aria-label="Search properties"
          >
            <svg className="w-5 h-5 md:mr-2" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="11" cy="11" r="8"/><path d="m21 21-4.3-4.3"/></svg>
            <span className="hidden md:inline">Search</span>
          </button>
        </form>
      </div>
    </div>
  );
}

export default SearchBar;

