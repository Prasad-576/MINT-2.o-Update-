import Card from '../Common/Card';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const CalendarWidget = () => {
  return (
    <Card className="!p-4">
      <div className="flex items-center justify-between mb-3">
        <h3 className="text-sm font-semibold text-gray-900">July 2026</h3>
        <div className="flex gap-1.5">
          <button className="text-gray-400 hover:text-gray-900"><ChevronLeft size={14} /></button>
          <button className="text-gray-400 hover:text-gray-900"><ChevronRight size={14} /></button>
        </div>
      </div>
      
      <div className="grid grid-cols-7 text-center mb-2">
        {['S', 'M', 'T', 'W', 'T', 'F', 'S'].map(day => (
          <div key={day} className="text-[10px] font-semibold text-gray-400">{day}</div>
        ))}
      </div>
      
      <div className="grid grid-cols-7 text-center gap-y-2">
        {/* Placeholder dates matching the screenshot */}
        <div className="text-sm text-gray-300 py-1.5">28</div>
        <div className="text-sm text-gray-300 py-1.5">29</div>
        <div className="text-sm text-gray-300 py-1.5">30</div>
        <div className="text-sm text-gray-600 py-1.5 hover:bg-gray-50 rounded-full cursor-pointer">1</div>
        <div className="text-sm text-gray-600 py-1.5 hover:bg-gray-50 rounded-full cursor-pointer">2</div>
        <div className="text-sm text-gray-600 py-1.5 hover:bg-gray-50 rounded-full cursor-pointer">3</div>
        <div className="text-sm text-gray-600 py-1.5 hover:bg-gray-50 rounded-full cursor-pointer">4</div>
        
        <div className="text-sm text-gray-600 py-1.5 hover:bg-gray-50 rounded-full cursor-pointer">5</div>
        <div className="text-sm text-gray-600 py-1.5 hover:bg-gray-50 rounded-full cursor-pointer">6</div>
        <div className="text-sm text-gray-600 py-1.5 hover:bg-gray-50 rounded-full cursor-pointer">7</div>
        <div className="text-sm text-gray-600 py-1.5 hover:bg-gray-50 rounded-full cursor-pointer">8</div>
        <div className="text-sm text-gray-600 py-1.5 hover:bg-gray-50 rounded-full cursor-pointer">9</div>
        <div className="text-sm text-gray-600 py-1.5 hover:bg-gray-50 rounded-full cursor-pointer">10</div>
        <div className="text-sm text-gray-600 py-1.5 hover:bg-gray-50 rounded-full cursor-pointer">11</div>
        
        <div className="text-sm text-gray-600 py-1.5 hover:bg-gray-50 rounded-full cursor-pointer">12</div>
        <div className="text-sm text-gray-600 py-1.5 hover:bg-gray-50 rounded-full cursor-pointer">13</div>
        <div className="text-sm text-gray-600 py-1.5 hover:bg-gray-50 rounded-full cursor-pointer">14</div>
        <div className="text-sm text-gray-600 py-1.5 hover:bg-gray-50 rounded-full cursor-pointer">15</div>
        <div className="text-sm text-gray-600 py-1.5 hover:bg-gray-50 rounded-full cursor-pointer">16</div>
        <div className="text-sm text-gray-600 py-1.5 hover:bg-gray-50 rounded-full cursor-pointer">17</div>
        <div className="text-sm text-gray-600 py-1.5 hover:bg-gray-50 rounded-full cursor-pointer">18</div>
        
        <div className="text-sm text-gray-600 py-1.5 hover:bg-gray-50 rounded-full cursor-pointer">19</div>
        <div className="text-sm text-gray-600 py-1.5 hover:bg-gray-50 rounded-full cursor-pointer">20</div>
        <div className="text-sm text-gray-600 py-1.5 hover:bg-gray-50 rounded-full cursor-pointer">21</div>
        <div className="text-sm text-gray-600 py-1.5 hover:bg-gray-50 rounded-full cursor-pointer">22</div>
        {/* Selected Date */}
        <div className="text-sm text-white bg-teal-primary py-1.5 rounded-full font-medium shadow-sm cursor-pointer">23</div>
        <div className="text-sm text-gray-600 py-1.5 hover:bg-gray-50 rounded-full cursor-pointer">24</div>
        <div className="text-sm text-gray-600 py-1.5 hover:bg-gray-50 rounded-full cursor-pointer">25</div>

        <div className="text-sm text-gray-600 py-1.5 hover:bg-gray-50 rounded-full cursor-pointer">26</div>
        <div className="text-sm text-gray-600 py-1.5 hover:bg-gray-50 rounded-full cursor-pointer">27</div>
        <div className="text-sm text-gray-600 py-1.5 hover:bg-gray-50 rounded-full cursor-pointer">28</div>
        <div className="text-sm text-gray-600 py-1.5 hover:bg-gray-50 rounded-full cursor-pointer">29</div>
        <div className="text-sm text-gray-600 py-1.5 hover:bg-gray-50 rounded-full cursor-pointer">30</div>
        <div className="text-sm text-gray-600 py-1.5 hover:bg-gray-50 rounded-full cursor-pointer">31</div>
        <div className="text-sm text-gray-300 py-1.5">1</div>
      </div>
    </Card>
  );
};

export default CalendarWidget;
