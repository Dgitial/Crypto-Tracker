import { Pagination } from "@mui/material";
import "./styles.css";

export default function PaginationComponent({ page, handlePageChange }) {
  return (
    <div className="pagination-component">
      <Pagination
        count={10} // Total number of pages
        page={page} // Current page
        onChange={handlePageChange} // Change page handler
        sx={{
          color: "var(--white)",
          "& .Mui-selected": {
            backgroundColor: "var(--yellow) !important",
            color: "#fff !important",
            borderColor: "var(--blue) !important",
          },
          "& .MuiPaginationItem-ellipsis": {
            border: "0px solid var(--grey) !important",
          },
          "& .MuiPaginationItem-text": {
            color: "var(--white)",
            border: "1px solid var(--grey)",
          },
        }}
      />
    </div>
  );
}
