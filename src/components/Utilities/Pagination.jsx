const Pagination = ({ page, setPage, lastPage }) => {

    const scrollTop = () => {
        scrollTo({
            behavior: "smooth",
            top: 0
        })
    }


    const handleNextPage = () => {
        setPage((prevState) => prevState + 1)
        scrollTop()
    }

    const handlePrevPage = () => {
        setPage((nextState) => nextState - 1)
        scrollTop()
    }

    return (
        <div className="flex justify-center items-center py-4 px-2 gap-4 text-2xl text-color-primary">
            {page <= 1 ? null
                : <button className="transition-all hover:text-color-accent" onClick={handlePrevPage}>Previous</button>}

            <p>{page} of {lastPage}</p>
            {page >= { lastPage } ? null : <button className="transition-all hover:text-color-accent" onClick={handleNextPage}>Next</button>}

        </div>
    )
}

export default Pagination