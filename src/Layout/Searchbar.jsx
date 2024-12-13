import { useState } from "react";
import { MagnifyingGlassIcon } from '@heroicons/react/24/outline'
import Button from "../Components/Button";

export default function Searchbar() {
 

    const [search, setSearchResult] = useState('');
    const handleSearch = (e) => {
        setSearchResult(e.target.value);
    }

    return (
        <div className=" flex h-9 w-80 rounded-full border border-input bg-transparent px-3 py-1 text-base shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50 md:text-sm">

            <input 
            className="outline-none [&::-webkit-search-cancel-button]:hidden"
            type="search"
            size="36" 
            value={search} 
            onChange={handleSearch}
            placeholder="Search..." 
            >
            </input>

            <div className="flex items-center justify-center text-center">
            <Button variant="ghost2" size="icon">
                <MagnifyingGlassIcon className="h-4 w-4"/>
            </Button>
            </div>

        </div>
        
    );
};