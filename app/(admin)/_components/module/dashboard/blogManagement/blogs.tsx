'use client';

import React from 'react';
import { Card, CardBody, CardFooter, CardHeader } from '@nextui-org/card';
import { Tooltip } from '@nextui-org/tooltip';
import { TBlog } from '@/types';
import { format } from 'date-fns';
import EditBlogModal from '../../../modal/editBlogModal';
import DeleteBlogModal from '../../../modal/deleteBlogModal';
import AddBlogModal from '../../../modal/addBlogModal';
import Image from 'next/image';

interface TBlogTableProps {
  blogs: TBlog[];
}

export default function BlogCard({ blogs }: TBlogTableProps) {
  return (
    <div>
      <div className="flex justify-end mb-5">
        <AddBlogModal />
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {blogs?.map((blog) => (
          <Card
            key={blog._id}
            className="shadow-lg border rounded-lg border-default-200"
          >
            <CardHeader className="flex justify-between items-center">
              <Image
                src={blog.imageUrl}
                width={500}
                height={500}
                alt={blog.imageUrl}
                className="w-full h-[250px] object-cover rounded-md"
              />
            </CardHeader>
            <CardBody className="p-4">
              <div className="mb-4">
                <div
                  className="html-content"
                  dangerouslySetInnerHTML={{
                    __html: blog.content,
                  }}
                />
              </div>
              <div className="mb-4">
                <p className="text-sm text-default-600">
                  Published: {format(new Date(blog.createdAt), 'dd MMM y')}
                </p>
              </div>
            </CardBody>
            <CardFooter className="flex justify-between p-4 border-t border-default-300">
              <div className="flex items-center gap-3">
                <EditBlogModal blog={blog} />
                <DeleteBlogModal blog={blog} />
              </div>
            </CardFooter>
          </Card>
        ))}
      </div>
    </div>
  );
}