import React, { useState } from 'react';
import { workApi } from '../api/authApi';

type WorkItemFormProps = {
  onSuccess: () => void;
  onCancel: () => void;
  initialData?: {
    id?: string;
    title: string;
    description: string;
    status: 'in-progress' | 'completed' | 'archived';
  };
};

const WorkItemForm: React.FC<WorkItemFormProps> = ({ 
  onSuccess, 
  onCancel, 
  initialData 
}) => {
  const [title, setTitle] = useState(initialData?.title || '');
  const [description, setDescription] = useState(initialData?.description || '');
  const [status, setStatus] = useState<'in-progress' | 'completed' | 'archived'>(
    initialData?.status || 'in-progress'
  );
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Validate form
    if (!title.trim()) {
      setError('Title is required');
      return;
    }
    
    if (!description.trim()) {
      setError('Description is required');
      return;
    }
    
    try {
      setIsSubmitting(true);
      setError(null);
      
      if (initialData?.id) {
        // Update existing work item
        await workApi.updateWorkItem(initialData.id, {
          title,
          description,
          status
        });
      } else {
        // Create new work item
        await workApi.createWorkItem({
          title,
          description,
          status
        });
      }
      
      onSuccess();
    } catch (err) {
      console.error('Error saving work item:', err);
      setError('Failed to save work item. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="bg-white p-6 rounded-lg shadow-lg">
      <h2 className="text-xl font-semibold mb-4">
        {initialData?.id ? 'Edit Work Item' : 'Create New Work Item'}
      </h2>
      
      {error && (
        <div className="mb-4 p-3 bg-red-50 text-red-700 rounded-md">
          {error}
        </div>
      )}
      
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label htmlFor="title" className="block text-gray-700 font-medium mb-2">
            Title
          </label>
          <input
            type="text"
            id="title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Enter title"
            disabled={isSubmitting}
          />
        </div>
        
        <div className="mb-4">
          <label htmlFor="description" className="block text-gray-700 font-medium mb-2">
            Description
          </label>
          <textarea
            id="description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            rows={4}
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Enter description"
            disabled={isSubmitting}
          />
        </div>
        
        <div className="mb-6">
          <label htmlFor="status" className="block text-gray-700 font-medium mb-2">
            Status
          </label>
          <select
            id="status"
            value={status}
            onChange={(e) => setStatus(e.target.value as 'in-progress' | 'completed' | 'archived')}
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            disabled={isSubmitting}
          >
            <option value="in-progress">In Progress</option>
            <option value="completed">Completed</option>
            <option value="archived">Archived</option>
          </select>
        </div>
        
        <div className="flex justify-end space-x-4">
          <button
            type="button"
            onClick={onCancel}
            className="px-4 py-2 text-gray-700 bg-gray-200 rounded-md hover:bg-gray-300 focus:outline-none focus:ring-2 focus:ring-gray-400"
            disabled={isSubmitting}
          >
            Cancel
          </button>
          <button
            type="submit"
            className="px-4 py-2 text-white bg-blue-600 rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 disabled:opacity-70"
            disabled={isSubmitting}
          >
            {isSubmitting ? 'Saving...' : initialData?.id ? 'Update' : 'Create'}
          </button>
        </div>
      </form>
    </div>
  );
};

export default WorkItemForm;