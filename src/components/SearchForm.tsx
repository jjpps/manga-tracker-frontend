const SearchForm = ({value,onChange,onsubmit}:{
                        value: string;
                        onChange: (value: string) => void;
                        onsubmit:()=>void;        })=> {

    const submitHandler=  (e: React.FormEvent<HTMLFormElement>)=>{
        e.preventDefault();
        onsubmit();
    }

    return (
        <form onSubmit={submitHandler}>
            <div className="border-b border-gray-900/10 pb-12">
                <div className="col-span-full">
                    <label htmlFor="manga-link" className="block text-sm/6 font-medium text-gray-900">Link do
                        Manga</label>
                    <div className="mt-2">
                        <input type="text"
                               placeholder="https://mangadex.org/title/63e54dfd-f7a9-473e-a591-28558e229c5b/zatch-bell"
                               name="manga-link" id="manga-link" autoComplete="url"
                               value={value}
                               onChange={(e) => onChange(e.target.value)}
                               className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm/6"/>
                    </div>

                </div>
            </div>
            <div className="mt-6 flex items-center justify-end gap-x-6">
                <button type="submit"
                        className="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">Procurar
                </button>
            </div>
        </form>);
};

export default SearchForm;
