import React from 'react';

function UserReview(props) {
  return (
    <div className=' my-16 px-10'>
      <div className="overflow-x-auto">
  <table className="table w-full">
    {/* <!-- head --> */}
    <thead>
      <tr>
        <th></th>
        <th>Service</th>
        <th>Review</th>
        <th>Actions</th>
      </tr>
    </thead>
    <tbody>
       
      <tr>
        <th>1</th>
        <td>Cy Ganderton</td>
        <td>Quality Control Specialist</td>
        <td>Blue</td>
      </tr>
     
    </tbody>
  </table>
</div>
    </div>
  );
}

export default UserReview;