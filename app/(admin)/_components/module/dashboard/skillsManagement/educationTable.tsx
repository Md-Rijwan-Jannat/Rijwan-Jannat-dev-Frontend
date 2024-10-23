'use client';

import {
  Table,
  TableHeader,
  TableColumn,
  TableBody,
  TableRow,
  TableCell,
} from '@nextui-org/table';
import { Avatar } from '@nextui-org/avatar';
import { Tooltip } from '@nextui-org/tooltip';
import React from 'react';
import AddEducationModal from '../../../modal/addEducationModal';
import DeleteEducationModal from '../../../modal/deleteEducationModal';
import { TEducation } from '@/types';
import EditEducationModal from '../../../modal/editEducationModal ';

interface TEducationTableProps {
  educations: TEducation[];
}

export default function EducationTable({ educations }: TEducationTableProps) {
  // Helper function to trim text to a specified length
  const getTrimmedText = (text: string, maxLength: number) => {
    return text.length > maxLength ? text.slice(0, maxLength) + '...' : text;
  };

  return (
    <div>
      <div className="flex justify-end mb-5">
        <AddEducationModal />
      </div>
      <Table aria-label="Education Table">
        <TableHeader>
          <TableColumn>Institution</TableColumn>
          <TableColumn>Location</TableColumn>
          <TableColumn>Start Date</TableColumn>
          <TableColumn>End Date</TableColumn>
          <TableColumn>Grade</TableColumn>
          <TableColumn>Subjects</TableColumn>
          <TableColumn>Degree</TableColumn>
          <TableColumn>Actions</TableColumn>
        </TableHeader>
        <TableBody emptyContent={'No education available'}>
          {educations?.map((education: TEducation) => (
            <TableRow key={education._id}>
              <TableCell>
                <p>{education.institution}</p>
              </TableCell>
              <TableCell>{education.location}</TableCell>
              <TableCell>
                {new Date(education.startDate).toLocaleDateString()}
              </TableCell>
              <TableCell>
                {education.endDate ? (
                  <p> {new Date(education.endDate).toLocaleDateString()}</p>
                ) : (
                  'N/A'
                )}
              </TableCell>
              <TableCell>
                <p className="whitespace-nowrap">{education.grade}</p>
              </TableCell>

              {/* Subjects with tooltip */}
              <TableCell>
                <Tooltip
                  className="w-[250px]"
                  content={education.subjects.join(', ')}
                >
                  <span>
                    {getTrimmedText(education.subjects.join(', '), 28)}
                  </span>
                </Tooltip>
              </TableCell>

              {/* Description with tooltip */}
              <TableCell>
                <p>{education.degree}</p>
              </TableCell>

              <TableCell>
                <div className="flex items-center gap-5 justify-start">
                  <EditEducationModal education={education} />
                  <DeleteEducationModal education={education} />
                </div>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
}