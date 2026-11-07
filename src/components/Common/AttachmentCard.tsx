import { FileText, Image as ImageIcon, Link as LinkIcon, File } from 'lucide-react';
import { Attachment } from '../../data/mockData';

interface AttachmentCardProps {
  attachment: Attachment;
}

const getIconForType = (type: string) => {
  switch (type) {
    case 'image':
      return <ImageIcon className="text-teal-primary" size={18} />;
    case 'pdf':
    case 'doc':
      return <FileText className="text-red-500" size={18} />;
    case 'link':
    case 'figma':
      return <LinkIcon className="text-purple-600" size={18} />;
    default:
      return <File className="text-gray-500" size={18} />;
  }
};

const getBgForType = (type: string) => {
  switch (type) {
    case 'image':
      return 'bg-teal-primary/5';
    case 'pdf':
    case 'doc':
      return 'bg-red-50';
    case 'link':
    case 'figma':
      return 'bg-purple-50';
    default:
      return 'bg-gray-100';
  }
};

const AttachmentCard = ({ attachment }: AttachmentCardProps) => {
  return (
    <div className="flex items-center gap-3 p-3 rounded-xl border border-gray-100 bg-white shadow-sm hover:border-gray-200 hover:shadow-md transition-all cursor-pointer group">
      <div className={`w-10 h-10 rounded-lg flex items-center justify-center shrink-0 transition-colors ${getBgForType(attachment.type)}`}>
        {getIconForType(attachment.type)}
      </div>
      <div className="overflow-hidden">
        <p className="text-sm font-semibold text-gray-900 truncate group-hover:text-teal-primary transition-colors">
          {attachment.name}
        </p>
        <p className="text-xs text-gray-500 font-medium">
          {attachment.sizeOrDomain}
        </p>
      </div>
    </div>
  );
};

export default AttachmentCard;
