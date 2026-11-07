import { motion } from 'framer-motion';
import Button from '../Common/Button';
import Card from '../Common/Card';
import ProgressBar from '../Common/ProgressBar';
import Badge from '../Common/Badge';
import { CheckCircle, BarChart3, TrendingUp } from 'lucide-react';

interface HeroProps {
  onOpenLogin: () => void;
}

const Hero = ({ onOpenLogin }: HeroProps) => {
  return (
    <section id="home" className="relative pt-32 pb-20 md:pt-48 md:pb-32 overflow-hidden flex items-center justify-center min-h-screen">
      {/* Abstract Grid Background */}
      <div className="absolute inset-0 -z-10 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]"></div>
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_60%_50%_at_50%_0%,#00000008_0%,transparent_100%)]"></div>
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-blue-400/10 rounded-full blur-3xl -z-10"></div>
      <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-indigo-400/10 rounded-full blur-3xl -z-10"></div>

      <div className="max-w-7xl mx-auto px-6 relative w-full">
        <div className="text-center max-w-3xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <Badge color="blue" className="mb-6 inline-flex px-3 py-1.5 text-sm rounded-full shadow-sm">
              ✨ The New Standard in Team Management
            </Badge>
          </motion.div>
          
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-5xl md:text-6xl lg:text-7xl font-extrabold text-gray-900 tracking-tight leading-[1.1] mb-6"
          >
            Manage Employees, Tasks & Deadlines From One <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">Smart</span> Dashboard
          </motion.h1>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-lg md:text-xl text-gray-600 mb-10 leading-relaxed max-w-2xl mx-auto"
          >
            Streamline employee management, assign tasks, monitor deadlines, and improve team productivity from one intelligent dashboard.
          </motion.p>
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <Button onClick={onOpenLogin} variant="primary" className="w-full sm:w-auto px-8 py-3.5 text-lg font-semibold shadow-lg shadow-blue-600/30 rounded-xl">
              Apply for Credentials
            </Button>
            <Button onClick={onOpenLogin} variant="outline" className="w-full sm:w-auto px-8 py-3.5 text-lg font-semibold border-2 rounded-xl bg-white/50 backdrop-blur-sm">
              Login
            </Button>
          </motion.div>
        </div>

        {/* Decorative Floating Cards */}
        <div className="hidden lg:block">
          {/* Left Floating Card */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0, y: [0, -10, 0] }}
            transition={{ 
              opacity: { duration: 0.8, delay: 0.5 },
              x: { duration: 0.8, delay: 0.5 },
              y: { duration: 4, repeat: Infinity, ease: "easeInOut" }
            }}
            className="absolute top-1/4 -left-12 xl:left-0 z-10 w-72"
          >
            <Card className="shadow-2xl shadow-gray-200/50 backdrop-blur-xl bg-white/90 border-white">
              <div className="flex items-start gap-4 mb-4">
                <div className="p-2.5 bg-green-100 text-green-600 rounded-xl">
                  <CheckCircle size={24} />
                </div>
                <div>
                  <h4 className="font-bold text-gray-900 text-sm">Design System</h4>
                  <p className="text-xs text-gray-500">Task Completed</p>
                </div>
              </div>
              <div className="flex items-center justify-between mb-2">
                <span className="text-xs font-semibold text-gray-700">Sprint Progress</span>
                <span className="text-xs font-bold text-teal-primary">85%</span>
              </div>
              <ProgressBar progress={85} />
            </Card>
          </motion.div>

          {/* Right Floating Card */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0, y: [0, 15, 0] }}
            transition={{ 
              opacity: { duration: 0.8, delay: 0.7 },
              x: { duration: 0.8, delay: 0.7 },
              y: { duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }
            }}
            className="absolute top-1/3 -right-12 xl:right-0 z-10 w-64"
          >
            <Card className="shadow-2xl shadow-blue-900/5 backdrop-blur-xl bg-white/90 border-white p-5">
              <div className="flex items-center justify-between mb-4">
                <div className="p-2 bg-teal-primary/5 text-teal-primary rounded-lg">
                  <BarChart3 size={20} />
                </div>
                <Badge color="green" className="flex items-center gap-1">
                  <TrendingUp size={12} /> +12%
                </Badge>
              </div>
              <h4 className="font-bold text-gray-900 text-lg mb-1">94.2%</h4>
              <p className="text-xs font-medium text-gray-500">Team Efficiency Rate</p>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
