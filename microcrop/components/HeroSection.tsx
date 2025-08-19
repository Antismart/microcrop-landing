"use client";

import React from 'react';
import { Shield, ArrowRight, Layers } from 'lucide-react';

// Ultra simplified Hero section - no complex styling or positioning
export default function HeroSection() {
  return (
    <div className="w-full py-20 mt-20 border-2 border-red-500"> {/* Debug border */}
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Hero Content */}
          <div className="lg:w-1/2">
            <h1 className="text-5xl font-bold text-white mb-6">
              Protect Your Crops with DeFi Insurance
            </h1>
            
            <p className="text-xl text-gray-300 mb-8">
              Revolutionary parametric insurance connecting African farmers with global liquidity.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 mb-8">
              <button className="bg-green-500 text-black px-6 py-3 rounded-xl font-bold">
                Demo Protection
              </button>
              <button className="border border-green-500 text-green-400 px-6 py-3 rounded-xl font-bold">
                Demo Liquidity
              </button>
            </div>
          </div>
          
          {/* Simple Dashboard Preview */}
          <div className="lg:w-1/2 border-2 border-yellow-500 bg-gray-900 rounded-xl p-6"> {/* Debug border */}
            <h3 className="text-xl font-bold text-white mb-4">Dashboard Preview</h3>
            
            <div className="space-y-4">
              <div className="p-4 bg-black/40 rounded-lg border border-gray-700/50">
                <div className="flex justify-between items-center">
                  <span className="text-white">Current Weather</span>
                  <span className="text-green-400">22°C</span>
                </div>
              </div>
              
              <div className="p-4 bg-black/40 rounded-lg border border-gray-700/50">
                <div className="flex justify-between items-center">
                  <span className="text-white">Latest Activity</span>
                  <span className="text-green-400">2 min ago</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}