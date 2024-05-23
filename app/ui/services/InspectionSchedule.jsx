import { motion } from 'framer-motion';

const InspectionSchedule = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="object-fit w-full h-full rounded-xl p-4 bg-slate-800 text-white sm:p-6 md:p-8 lg:p-10 xl:p-12"
    >
      <h2 className="text-lg font-bold sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl">NFPA 96 Exhaust System Inspection Schedule</h2>
      <table className="mt-4 w-full text-xs sm:text-sm md:text-base lg:text-lg xl:text-xl">
        <thead>
          <tr className="border-b border-slate-200 text-slate-400 uppercase">
            <th className="py-2 text-left">Frequency</th>
            <th className="py-2 text-left">Description</th>
          </tr>
        </thead>
        <tbody>
          <tr className="border-b border-slate-200">
            <td className="py-2"><strong>Monthly:</strong></td>
            <td className="py-2">High-volume cooking operations (e.g., 24-hour cooking, charbroiling).</td>
          </tr>
          <tr className="border-b border-slate-200">
            <td className="py-2"><strong>Quarterly:</strong></td>
            <td className="py-2">Moderate-volume cooking operations.</td>
          </tr>
          <tr className="border-b border-slate-200">
            <td className="py-2"><strong>Semi-annually:</strong></td>
            <td className="py-2">Low-volume cooking operations (e.g., day camps, seasonal businesses).</td>
          </tr>
          <tr>
            <td className="py-2"><strong>Annually:</strong></td>
            <td className="py-2">Non-grease-producing cooking operations (e.g., churches, senior centers).</td>
          </tr>
        </tbody>
      </table>
    </motion.div>
  );
};

export default InspectionSchedule;
