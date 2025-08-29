import React, { useState, forwardRef, useImperativeHandle } from "react";
import { FileText, Download, Eye, Upload, Calendar, User, Car, X } from "lucide-react";
import Dropdown from "../../utils/Dropdown";

const Documents = forwardRef((props, ref) => {
  const [documents, setDocuments] = useState([
    {
      id: 1,
      name: "Driver License - John Doe",
      type: "driver",
      category: "License",
      vehicleNumber: "MH12AB1234",
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
      vehicleNumber: "MH12AB1234",
      uploadDate: "2024-02-01",
      expiryDate: "2025-02-01",
      status: "Expiring Soon",
      fileSize: "1.8 MB",
      format: "PDF"
    },
    {
      id: 3,
      name: "Driver License - Sarah Smith",
      type: "driver",
      category: "License",
      vehicleNumber: "DL01BC5678",
      uploadDate: "2024-01-20",
      expiryDate: "2026-01-20",
      status: "Active",
      fileSize: "2.2 MB",
      format: "PDF"
    },
    {
      id: 4,
      name: "Training Certificate - Mike Johnson",
      type: "driver",
      category: "Training Certificate",
      vehicleNumber: "KA03CD9012",
      uploadDate: "2024-03-10",
      expiryDate: "2025-03-10",
      status: "Active",
      fileSize: "1.9 MB",
      format: "PDF"
    },
    {
      id: 5,
      name: "Vehicle Registration",
      type: "vehicle",
      category: "Registration",
      vehicleNumber: "MH12AB1234",
      uploadDate: "2024-01-10",
      expiryDate: "2025-01-10",
      status: "Active",
      fileSize: "3.2 MB",
      format: "PDF"
    },
    {
      id: 6,
      name: "Insurance Certificate",
      type: "vehicle",
      category: "Insurance",
      vehicleNumber: "MH12AB1234",
      uploadDate: "2024-03-15",
      expiryDate: "2025-03-15",
      status: "Active",
      fileSize: "2.1 MB",
      format: "PDF"
    },
    {
      id: 7,
      name: "Pollution Certificate",
      type: "vehicle",
      category: "Pollution Certificate",
      vehicleNumber: "MH12AB1234",
      uploadDate: "2024-02-10",
      expiryDate: "2025-02-10",
      status: "Active",
      fileSize: "1.5 MB",
      format: "PDF"
    },
    {
      id: 8,
      name: "Fitness Certificate",
      type: "vehicle",
      category: "Fitness",
      vehicleNumber: "DL01BC5678",
      uploadDate: "2024-01-20",
      expiryDate: "2024-12-20",
      status: "Expiring Soon",
      fileSize: "1.9 MB",
      format: "PDF"
    },
    {
      id: 9,
      name: "Route Permit",
      type: "vehicle",
      category: "Route Permit",
      vehicleNumber: "DL01BC5678",
      uploadDate: "2024-01-25",
      expiryDate: "2025-01-25",
      status: "Active",
      fileSize: "2.0 MB",
      format: "PDF"
    },
    {
      id: 10,
      name: "Vehicle Registration",
      type: "vehicle",
      category: "Registration",
      vehicleNumber: "KA03CD9012",
      uploadDate: "2024-02-05",
      expiryDate: "2025-02-05",
      status: "Active",
      fileSize: "3.1 MB",
      format: "PDF"
    },
    {
      id: 11,
      name: "Insurance Certificate",
      type: "vehicle",
      category: "Insurance",
      vehicleNumber: "KA03CD9012",
      uploadDate: "2024-02-20",
      expiryDate: "2025-02-20",
      status: "Active",
      fileSize: "2.3 MB",
      format: "PDF"
    }
  ]);

  const [activeTab, setActiveTab] = useState("all");
  const [selectedVehicle, setSelectedVehicle] = useState("all");
  const [showViewModal, setShowViewModal] = useState(false);
  const [selectedDocument, setSelectedDocument] = useState(null);

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
    // Filter by type
    if (activeTab !== "all" && doc.type !== activeTab) return false;
    
    // Filter by vehicle number (for any document with a vehicle number)
    if (selectedVehicle !== "all" && doc.vehicleNumber !== selectedVehicle) return false;
    
    return true;
  });

  // Get unique vehicle numbers for filter dropdown (from all documents that have vehicle numbers)
  const vehicleNumbers = [...new Set(documents
    .filter(doc => doc.vehicleNumber)
    .map(doc => doc.vehicleNumber)
  )].sort();

  // Create dropdown options for vehicle filter
  const vehicleOptions = ["All Vehicles", ...vehicleNumbers];

  const formatDate = (dateString) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'short',
      day: 'numeric'
    });
  };

  const handleViewClick = (document) => {
    setSelectedDocument(document);
    setShowViewModal(true);
  };

  const handleVehicleFilterChange = (option) => {
    if (option === "All Vehicles") {
      setSelectedVehicle("all");
    } else {
      setSelectedVehicle(option);
    }
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
          onClick={() => {
            setActiveTab("vehicle");
            setSelectedVehicle("all");
          }}
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

      {/* Vehicle Filter - Show when there are vehicles to filter */}
      {vehicleNumbers.length > 0 && (
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Filter by Vehicle
          </label>
          <div className="w-64">
            <Dropdown
              options={vehicleOptions}
              selected={selectedVehicle === "all" ? "All Vehicles" : selectedVehicle}
              onSelect={handleVehicleFilterChange}
              placeholder="Select vehicle"
              className="border-2 border-gray-200"
            />
          </div>
        </div>
      )}

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
              {document.vehicleNumber && (
                <div className="flex items-center gap-2 text-xs text-gray-600">
                  <Car className="w-3 h-3" />
                  <span className="font-medium">Vehicle:</span>
                  <span className="font-medium text-[#04203e]">{document.vehicleNumber}</span>
                </div>
              )}
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
              <button 
                onClick={() => handleViewClick(document)}
                className="flex-1 flex items-center justify-center gap-1 px-3 py-2 bg-[#04203e] text-white rounded-md hover:bg-[#04203e]/90 transition-colors duration-200 text-xs"
              >
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

      {/* View Document Modal */}
      {showViewModal && selectedDocument && (
        <div className="fixed inset-0 flex items-center justify-center bg-black/40 z-50">
          <div className="bg-white rounded-lg shadow-xl p-6 w-[500px] relative max-h-[100vh] overflow-y-auto">
            {/* Close Button */}
            <button
              onClick={() => setShowViewModal(false)}
              className="absolute top-3 right-3 text-gray-500 hover:text-black"
            >
              <X size={18} />
            </button>

            {/* Header */}
            <div className="flex items-center gap-3 mb-6">
              {getTypeIcon(selectedDocument.type)}
              <FileText className="w-6 h-6 text-gray-600" />
              <h2 className="text-xl font-semibold text-gray-900">Document Details</h2>
            </div>

            {/* Document Information */}
            <div className="space-y-4">
              {/* Document Name */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Document Name
                </label>
                <p className="text-gray-900 bg-gray-50 p-3 rounded-md">
                  {selectedDocument.name}
                </p>
              </div>

              {/* Document Type and Category Row */}
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Document Type
                  </label>
                  <div className="flex items-center gap-2 bg-gray-50 p-3 rounded-md">
                    {getTypeIcon(selectedDocument.type)}
                    <span className="text-gray-900 capitalize">{selectedDocument.type}</span>
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Category
                  </label>
                  <p className="text-gray-900 bg-gray-50 p-3 rounded-md">
                    {selectedDocument.category}
                  </p>
                </div>
              </div>

              {/* Vehicle Number */}
              {selectedDocument.vehicleNumber && (
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Vehicle Number
                  </label>
                  <div className="flex items-center gap-2 bg-gray-50 p-3 rounded-md">
                    <Car className="w-4 h-4 text-[#04203e]" />
                    <span className="text-[#04203e] font-medium">{selectedDocument.vehicleNumber}</span>
                  </div>
                </div>
              )}

              {/* Upload and Expiry Dates Row */}
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Upload Date
                  </label>
                  <div className="flex items-center gap-2 bg-gray-50 p-3 rounded-md">
                    <Calendar className="w-4 h-4 text-gray-600" />
                    <span className="text-gray-900">{formatDate(selectedDocument.uploadDate)}</span>
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Expiry Date
                  </label>
                  <div className="flex items-center gap-2 bg-gray-50 p-3 rounded-md">
                    <Calendar className="w-4 h-4 text-gray-600" />
                    <span className="text-gray-900">{formatDate(selectedDocument.expiryDate)}</span>
                  </div>
                </div>
              </div>

              {/* Status and File Info Row */}
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Status
                  </label>
                  <div className="bg-gray-50 p-3 rounded-md">
                    <span className={`px-3 py-1 rounded-full text-sm font-medium ${getStatusColor(selectedDocument.status)}`}>
                      {selectedDocument.status}
                    </span>
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    File Information
                  </label>
                  <div className="flex items-center gap-2 bg-gray-50 p-3 rounded-md">
                    <FileText className="w-4 h-4 text-gray-600" />
                    <span className="text-gray-900">{selectedDocument.fileSize} • {selectedDocument.format}</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex gap-3 mt-6 pt-4 border-t border-gray-200">
              <button
                onClick={() => setShowViewModal(false)}
                className="flex-1 px-4 py-2 border border-gray-300 text-gray-700 rounded-md hover:bg-gray-50 transition-colors duration-200"
              >
                Close
              </button>
              <button className="flex-1 flex items-center justify-center gap-2 px-4 py-2 bg-[#04203e] text-white rounded-md hover:bg-[#04203e]/90 transition-colors duration-200">
                <Download className="w-4 h-4" />
                Download
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
});

Documents.displayName = "Documents";

export default Documents;
