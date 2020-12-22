import User1 from "../images/3.jpg";
import User2 from "../images/1.jpg";
import User3 from "../images/4.jpg";

function Table() {
  return (
    <div className="px-14 pb-24">
      <table class="table-fixed w-full box-content">
        <thead>
          <tr className="border-t border-b">
            <th className="w-80 py-5 text-base font-normal	text-gray-500 text-left">
              <div className="ml-2">Users</div>
            </th>
            <th className="py-5 text-base font-normal	text-gray-500 text-left">
              Status
            </th>
            <th className="py-5 text-base font-normal	text-gray-500 text-left">
              Users
            </th>
            <th className="py-5 text-base font-normal	text-gray-500 text-left">
              Impression
            </th>
            <th className="py-5 text-base font-normal	text-gray-500 text-left">
              Conversion
            </th>
          </tr>
        </thead>
        <tbody>
          <tr className="border-b">
            <td className="flex items-center py-7">
              <img
                src={User1}
                alt="User"
                className="w-14 h-14 bg-gray-400 rounded-full mr-7"
              />
              <p>Robert Johnstons</p>
            </td>
            <td className="py-7">
              <div className=" inline-block rounded-md text-white font-bold text-sm px-3 py-1 bg-yellow-500">
                Paused
              </div>
            </td>
            <td className="py-7">
              <p className="mb-1 text-gray-800">189</p>
              <p className="text-gray-400">Total users</p>
            </td>
            <td className="py-7">
              <p className="mb-1 text-gray-800">189</p>
              <p className="text-gray-400">Total users</p>
            </td>
            <td className="py-7">
              <p className="mb-1 text-gray-800">189</p>
              <p className="text-gray-400">Total users</p>
            </td>
          </tr>
          <tr className="border-b">
            <td className="flex items-center py-7">
              <img
                src={User2}
                alt="User"
                className="w-14 h-14 bg-gray-400 rounded-full mr-7"
              />
              <p>Anna Atkinsone</p>
            </td>
            <td className="py-7">
              <div className=" inline-block rounded-md text-white font-bold text-sm px-3 py-1 bg-blue-600">
                Active
              </div>
            </td>
            <td className="py-7">
              <p className="mb-1 text-gray-800">189</p>
              <p className="text-gray-400">Total users</p>
            </td>
            <td className="py-7">
              <p className="mb-1 text-gray-800">189</p>
              <p className="text-gray-400">Total users</p>
            </td>
            <td className="py-7">
              <p className="mb-1 text-gray-800">189</p>
              <p className="text-gray-400">Total users</p>
            </td>
          </tr>
          <tr className="border-b">
            <td className="flex items-center py-7">
              <img
                src={User3}
                alt="User"
                className="w-14 h-14 bg-gray-400 rounded-full mr-7"
              />
              <p>Mark Atkinsone</p>
            </td>
            <td className="py-7">
              <div className=" inline-block rounded-md text-white font-bold text-sm px-3 py-1 bg-blue-600">
                Active
              </div>
            </td>
            <td className="py-7">
              <p className="mb-1 text-gray-800">189</p>
              <p className="text-gray-400">Total users</p>
            </td>
            <td className="py-7">
              <p className="mb-1 text-gray-800">189</p>
              <p className="text-gray-400">Total users</p>
            </td>
            <td className="py-7">
              <p className="mb-1 text-gray-800">189</p>
              <p className="text-gray-400">Total users</p>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default Table;
