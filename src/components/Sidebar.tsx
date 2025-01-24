import React from 'react';
import Link from 'next/link';

const Sidebar = () => {
  return (
    <div className="w-64 bg-gray-800 text-white p-4">
      <h2 className="text-2xl font-semibold mb-6">Admin Panel</h2>
      <ul>
        <li className="mb-4">
          <Link href="/dashboard/product-management">
            <a className="hover:text-blue-400">Product Management</a>
          </Link>
        </li>
        <li className="mb-4">
          <Link href="/dashboard/coupon-management">
            <a className="hover:text-blue-400">Coupon Management</a>
          </Link>
        </li>
        <li className="mb-4">
          <Link href="/dashboard/bulk-upload">
            <a className="hover:text-blue-400">Bulk Upload</a>
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
