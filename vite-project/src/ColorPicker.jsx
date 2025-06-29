import { useState } from "react";

function ColorPicker() {
  const [bgColor, setBgColor] = useState('#ffffff');

  const colors = ['#FF5733', '#33FF57', '#3357FF', '#FFFF33', '#FF33FF', '#33FFFF'];

  const handleCustomColor = (e) => {
    setBgColor(e.target.value);
  };

  return (
<div className="min-h-screen bg-white flex flex-col items-center justify-center p-5 text-center" style={{ backgroundColor: bgColor }}>
    <h1 className="text-2xl font-bold mb-5">🎨Color Picker App</h1>

      <div className="flex flex-wrap gap-4 mb-6">
        {colors.map((color, index) => (
          <div
            key={index}
            onClick={() => setBgColor(color)}
            style={{
              backgroundColor: color,
              width: '50px',
              height: '50px',
              cursor: 'pointer',
              border: bgColor === color ? '3px solid black' : '1px solid #ccc',
              borderRadius: '8px',
            }}
          ></div>
        ))}
      </div>

      <div className="mb-4">
        <label className="font-medium mr-2">Pick Custom Color:</label>
        <input type="color" value={bgColor} onChange={handleCustomColor} />
      </div>

      <p className="mt-4 font-semibold">
        Selected Color: <span style={{ color: bgColor }}>{bgColor}</span>
      </p>
    </div>
  );
}

export default ColorPicker;
