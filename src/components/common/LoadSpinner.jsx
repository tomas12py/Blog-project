export const LoadSpinner = ({ width = "", height = "",borderTopColor = "" }) => {
    return (
      <div className="spinner-container">
        <div 
          className= "spinner" style={{width,height,borderTopColor}}
        />
      </div>
    );
  };
  