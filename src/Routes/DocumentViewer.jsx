import React, { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';

const DocumentViewer = ({ applicationId }) => {
  const { t } = useTranslation();
  const [documents, setDocuments] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchDocuments = async () => {
      try {
        const response = await fetch(`http://localhost:5000/getApplicationDocuments/${applicationId}`);
        const data = await response.json();
        
        if (data.success) {
          setDocuments(data.data);
        } else {
          setError(data.message);
        }
      } catch (err) {
        setError('Failed to fetch documents');
        console.error('Error fetching documents:', err);
      } finally {
        setLoading(false);
      }
    };

    if (applicationId) {
      fetchDocuments();
    }
  }, [applicationId]);

  if (loading) {
    return (
      <div className="flex justify-center items-center p-4">
        <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-900"></div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="text-red-500 p-4 text-center">
        {error}
      </div>
    );
  }

  if (documents.length === 0) {
    return (
      <div className="text-gray-500 p-4 text-center">
        {t('noDocumentsFound')}
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 p-4">
      {documents.map((doc) => (
        <div key={doc.id} className="border rounded-lg p-4 bg-white shadow-sm">
          <h3 className="font-semibold text-lg mb-2">{doc.document_type}</h3>
          <div className="aspect-video relative bg-gray-100 rounded-lg overflow-hidden">
            {doc.file_path.toLowerCase().endsWith('.pdf') ? (
              <iframe
                src={`http://localhost:5000${doc.file_path}`}
                className="w-full h-full"
                title={doc.document_type}
              />
            ) : (
              <img
                src={`http://localhost:5000${doc.file_path}`}
                alt={doc.document_type}
                className="w-full h-full object-contain"
              />
            )}
          </div>
          <div className="mt-2 text-sm text-gray-600">
            <p>{t('applicantName')}: {doc.first_name} {doc.surname}</p>
            <p>{t('aadharNumber')}: {doc.aadhar}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default DocumentViewer; 