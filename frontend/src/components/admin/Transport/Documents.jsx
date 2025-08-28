import React, { useState, forwardRef, useImperativeHandle } from "react";
import { FileText, Download, Eye, Upload, Calendar, User, Car } from "lucide-react";

const Documents = forwardRef((props, ref) => {
  const [documents, setDocuments] = useState([
    {
      id: 1,
      name: "Driver License - John Doe",
      type: "driver",
      category: "License",
      uploadDate: "2024-01-15",
      expiryDate: "2026-01-15",
      status: "Active",
      fileSize: "2.4 MB",
      format: "PDF"
    },
    {
      id: 2,
      name: "Medical Certificate - John Doe",
      type: "driver",
      category: "Medical",
      uploadDate: "2024-02-01",
      expiryDate: "2025-02-01",
      status: "Expiring Soon",
      fileSize: "1.8 MB",
      format: "PDF"
    },
    {
      id: 3,
      name: "Vehicle Registration - BUS001",
      type: "vehicle",
      category: "Registration",
      uploadDate: "2024-01-10",
      expiryDate: "2025-01-10",
      status: "Active",
      fileSize: "3.2 MB",
      format: "PDF"
    },
    {
      id: 4,
      name: "Insurance Certificate - BUS001",
      type: "vehicle",
      category: "Insurance",
      uploadDate: "2024-03-15",
      expiryDate: "2025-03-15",
      status: "Active",
      fileSize: "2.1 MB",
      format: "PDF"
    },
    {
      id: 5,
      name: "Fitness Certificate - BUS002",
      type: "vehicle",
      category: "Fitness",
      uploadDate: "2024-01-20",
      expiryDate: "2024-12-20",
      status: "Expiring Soon",
      fileSize: "1.9 MB",
      format: "PDF"
    }
  ]);

  const [activeTab, setActiveTab] = useState("all");

  useImperativeHandle(ref, () => ({
    addDocument: (newDocument) => {
      setDocuments(prev => [...prev, { ...newDocument, id: Date.now() }]);
    }
  }));

  const getStatusColor = (status) => {
    switch (status) {
      case "Active":
        return "bg-green-100 text-green-800";
      case "Expiring Soon":
        return "bg-yellow-100 text-yellow-800";
      case "Expired":
        return "bg-red-100 text-red-800";
      default:
        return "bg-gray-100 text-gray-800";
    }
  };

  const getTypeIcon = (type) => {
    return type === "driver" ? (
      <User className="w-4 h-4 text-blue-600" />
    ) : (
      <Car className="w-4 h-4 text-purple-600" />
    );
  };

  const filteredDocuments = documents.filter(doc => {
    if (activeTab === "all") return true;
    return doc.type === activeTab;
  });

  const formatDate = (dateString) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'short',
      day: 'numeric'
    });
  };

  return (
    <div className="w-full">
      {/* Tab Navigation */}
      <div className="flex gap-4 mb-6 border-b border-gray-200">
        <button
          onClick={() => setActiveTab("all")}
          className={`pb-2 px-1 border-b-2 transition-colors duration-200 ${
            activeTab === "all"
              ? "border-[#04203e] text-[#04203e] font-medium"
              : "border-transparent text-gray-500 hover:text-gray-700"
          }`}
        >
          All Documents
        </button>
        <button
          onClick={() => setActiveTab("driver")}
          className={`pb-2 px-1 border-b-2 transition-colors duration-200 flex items-center gap-2 ${
            activeTab === "driver"
              ? "border-[#04203e] text-[#04203e] font-medium"
              : "border-transparent text-gray-500 hover:text-gray-700"
          }`}
        >
          <User className="w-4 h-4" />
          Driver Documents
        </button>
        <button
          onClick={() => setActiveTab("vehicle")}
          className={`pb-2 px-1 border-b-2 transition-colors duration-200 flex items-center gap-2 ${
            activeTab === "vehicle"
              ? "border-[#04203e] text-[#04203e] font-medium"
              : "border-transparent text-gray-500 hover:text-gray-700"
          }`}
        >
          <Car className="w-4 h-4" />
          Vehicle Documents
        </button>
      </div>

      {/* Documents Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {filteredDocuments.map((document) => (
          <div
            key={document.id}
            className="bg-white rounded-lg border border-gray-200 p-4 hover:shadow-md transition-shadow duration-200"
          >
            {/* Document Header */}
            <div className="flex items-start justify-between mb-3">
              <div className="flex items-center gap-2">
                {getTypeIcon(document.type)}
                <FileText className="w-5 h-5 text-gray-600" />
              </div>
              <span className={`px-2 py-1 rounded-full text-xs font-medium ${getStatusColor(document.status)}`}>
                {document.status}
              </span>
            </div>

            {/* Document Name */}
            <h3 className="font-medium text-gray-900 mb-2 text-sm leading-5">
              {document.name}
            </h3>

            {/* Document Details */}
            <div className="space-y-2 mb-4">
              <div className="flex items-center gap-2 text-xs text-gray-600">
                <span className="font-medium">Category:</span>
                <span>{document.category}</span>
              </div>
              <div className="flex items-center gap-2 text-xs text-gray-600">
                <Calendar className="w-3 h-3" />
                <span>Expires: {formatDate(document.expiryDate)}</span>
              </div>
              <div className="flex items-center gap-2 text-xs text-gray-600">
                <span>{document.fileSize} • {document.format}</span>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex gap-2">
              <button className="flex-1 flex items-center justify-center gap-1 px-3 py-2 bg-[#04203e] text-white rounded-md hover:bg-[#04203e]/90 transition-colors duration-200 text-xs">
                <Eye className="w-3 h-3" />
                View
              </button>
              <button className="flex-1 flex items-center justify-center gap-1 px-3 py-2 border border-gray-300 text-gray-700 rounded-md hover:bg-gray-50 transition-colors duration-200 text-xs">
                <Download className="w-3 h-3" />
                Download
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Empty State */}
      {filteredDocuments.length === 0 && (
        <div className="text-center py-12">
          <FileText className="w-12 h-12 text-gray-400 mx-auto mb-4" />
          <h3 className="text-lg font-medium text-gray-900 mb-2">No documents found</h3>
          <p className="text-gray-500">
            {activeTab === "all" 
              ? "No documents have been uploaded yet." 
              : `No ${activeTab} documents have been uploaded yet.`}
          </p>
        </div>
      )}
    </div>
  );
});

Documents.displayName = "Documents";

export default Documents;
