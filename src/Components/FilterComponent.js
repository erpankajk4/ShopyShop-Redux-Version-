import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faList, faTshirt, faFemale, faMobileAlt, faGem } from '@fortawesome/free-solid-svg-icons';

export default function FilterComponent({ setPrice, setCategory }) {
    return (
        <div className="bg-white border-r border-gray-300 p-4 h-screen w-1/6 min-w-min sticky left-0 transform transition-transform translate-x-0" style={{ top: "56px" }}>
            <h1 className="text-xl font-semibold mb-4">FilterBar</h1>

            <div className="mb-6">
                <label className="block font-medium mb-2 font-semibold text-gray-700">Price Range:</label>
                <div className="flex space-x-2 items-center">
                    <span className="text-gray-700">Min</span>
                    <input
                        type="range"
                        min="10"
                        max="2000"
                        step="10"
                        className="w-full"
                        onChange={(e) => setPrice(e.target.value)}
                    />
                    <span className="text-gray-700">Max</span>
                </div>
            </div>

            <div>
                <label className="block font-medium mb-2 font-semibold text-gray-700">Category:</label>
                <div className="space-y-1">
                    <CategoryRadioButton icon={faList} value="" label="Show All" setCategory={setCategory} />
                    <CategoryRadioButton icon={faTshirt} value="men's clothing" label="Men" setCategory={setCategory} />
                    <CategoryRadioButton icon={faFemale} value="women's clothing" label="Women" setCategory={setCategory} />
                    <CategoryRadioButton icon={faMobileAlt} value="electronics" label="Electronic" setCategory={setCategory} />
                    <CategoryRadioButton icon={faGem} value="jewelery" label="Jewellery" setCategory={setCategory} />
                </div>
            </div>
        </div>
    );
}

function CategoryRadioButton({ icon, value, label, setCategory }) {
    return (
        <div className="flex items-center space-x-2 cursor-pointer hover:bg-gray-100 p-2 rounded-md" onClick={() => setCategory(value)}>
            <FontAwesomeIcon icon={icon} className="text-blue-500" />
            <span className="text-gray-700">{label}</span>
        </div>
    );
}
