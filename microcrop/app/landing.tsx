"use client";

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import {
  Cloud, Shield, Zap, TrendingUp, Users, Globe, CheckCircle, ArrowRight,
  Menu, X, Sun, CloudRain, Wind, Thermometer, Activity, DollarSign,
  LucideIcon
} from 'lucide-react';

import ContactForm from '@/components/ContactForm';

// TypeScript Interfaces
interface Metric {
  value: string;
  label: string;
  icon: LucideIcon;
  color: string;
}

interface WeatherData {
  temp: string;
  condition: string;
  humidity: string;
  rainfall: string;
  windSpeed: string;
  feelsLike: string;
  risk: string;
}

interface Activity {
  type: string;
  amount: string;
  status: 'completed' | 'pending' | 'active';
  time: string;
}

interface Feature {
  icon: LucideIcon;
  title: string;
  description: string;
  gradient: string;
  bgGradient: string;
}

interface WeatherItem {
  icon: LucideIcon;
  label: string;
  value: string;
  color: string;
}

export default function MicroCropLanding() {
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);
  const [currentMetric, setCurrentMetric] = useState<number>(0);

  const metrics: Metric[] = [
    { value: '$2.4M', label: 'Total Value Locked', icon: DollarSign, color: 'from-green-400 to-emerald-500' },
    { value: '156', label: 'Active Policies', icon: Shield, color: 'from-emerald-400 to-green-600' },
    { value: '14.2%', label: 'Average Yield', icon: TrendingUp, color: 'from-green-500 to-lime-500' },
    { value: '$340K', label: 'Claims Paid', icon: CheckCircle, color: 'from-lime-400 to-green-500' }
  ];

  const weatherData: WeatherData = {
    temp: '22°C',
    condition: 'Sunny',
    humidity: '58%',
    rainfall: '45mm',
    windSpeed: '12 km/h',
    feelsLike: '24°C',
    risk: 'Low Risk'
  };

  const activities: Activity[] = [
    { type: 'Corn policy payout', amount: '$8,500', status: 'completed', time: '2 min ago' },
    { type: 'New liquidity added', amount: '$25,000', status: 'pending', time: '5 min ago' },
    { type: 'Policy purchased', amount: '$12,000', status: 'active', time: '12 min ago' }
  ];

  const features: Feature[] = [
    {
      icon: Users,
      title: "Seamless Onboarding",
      description: "USSD, WhatsApp, or mobile app registration. Geo-mapped to hyperlocal WeatherXM stations with instant M-Pesa premium payments.",
      gradient: "from-green-500 to-emerald-600",
      bgGradient: "from-green-500/10 to-emerald-500/10"
    },
    {
      icon: Cloud,
      title: "Hyperlocal Monitoring",
      description: "Real-time weather data from decentralized sensors. Smart contracts continuously monitor rainfall, temperature, and humidity triggers.",
      gradient: "from-blue-500 to-cyan-600",
      bgGradient: "from-blue-500/10 to-cyan-500/10"
    },
    {
      icon: Zap,
      title: "Instant Payouts",
      description: "Automated settlements when weather conditions trigger payouts. Direct M-Pesa transfers within minutes of claim validation.",
      gradient: "from-purple-500 to-pink-600",
      bgGradient: "from-purple-500/10 to-pink-500/10"
    }
  ];

  const weatherItems: WeatherItem[] = [
    { icon: CloudRain, label: 'Humidity', value: weatherData.humidity, color: 'text-blue-400' },
    { icon: CloudRain, label: 'Rainfall', value: weatherData.rainfall, color: 'text-cyan-400' },
    { icon: Wind, label: 'Wind Speed', value: weatherData.windSpeed, color: 'text-gray-400' },
    { icon: Thermometer, label: 'Feels Like', value: weatherData.feelsLike, color: 'text-red-400' }
  ];

  const navItems: { label: string; href: string }[] = [
    { label: 'Dashboard', href: '#' },
    // { label: 'Policies', href: '#' },
    // { label: 'Pools', href: '#' },
    // { label: 'Weather', href: '#' },
    { label: 'Privacy Policy', href: '/privacy-policy' },
    { label: 'Terms of Service', href: '/terms-of-service' }
  ];
  const socialLinks: string[] = ['Twitter', 'Discord', 'GitHub', 'Docs'];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentMetric((prev: number) => (prev + 1) % metrics.length);
    }, 4000);
    return () => clearInterval(timer);
  }, [metrics.length]);

  const getStatusColor = (status: Activity['status']): string => {
    switch (status) {
      case 'completed':
        return 'bg-green-500 animate-pulse';
      case 'pending':
        return 'bg-yellow-500 animate-bounce';
      case 'active':
        return 'bg-blue-500';
      default:
        return 'bg-gray-500';
    }
  };

  return (
    <>
      {/* Fixed background */}
      <div className="fixed inset-0 z-0 pointer-events-none">
        <div className="absolute inset-0 bg-gradient-to-br from-black via-slate-900 to-emerald-900"></div>
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-emerald-400/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-green-400/15 rounded-full blur-2xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-emerald-300/10 rounded-full blur-3xl animate-pulse delay-500"></div>
        
        {/* Floating particles */}
        <div className="absolute top-10 left-10 w-2 h-2 bg-emerald-400/60 rounded-full animate-bounce delay-300"></div>
        <div className="absolute top-20 right-20 w-1 h-1 bg-green-300/80 rounded-full animate-bounce delay-700"></div>
        <div className="absolute bottom-20 left-32 w-1.5 h-1.5 bg-lime-400/70 rounded-full animate-bounce delay-1000"></div>
        <div className="absolute bottom-32 right-40 w-1 h-1 bg-emerald-300/60 rounded-full animate-bounce delay-1500"></div>
      </div>

      {/* Header */}
      <div className="relative z-20 w-full bg-white/5 backdrop-blur-2xl border-b border-white/10 shadow-lg shadow-black/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            <div className="flex items-center space-x-4 group">
              <div className="relative">
                <img 
                  src="/micro.jpeg" 
                  alt="MicroCrop Logo" 
                  className="w-12 h-12 rounded-2xl object-cover shadow-xl shadow-emerald-500/20 group-hover:scale-110 transition-all duration-500 border border-white/20"
                />
                <div className="absolute inset-0 bg-gradient-to-tr from-emerald-400/20 to-transparent rounded-2xl"></div>
              </div>
              <div className="group-hover:translate-x-1 transition-all duration-300">
                <span className="text-2xl font-bold bg-gradient-to-r from-emerald-200 via-green-300 to-lime-300 bg-clip-text text-transparent tracking-tight">
                  MicroCrop
                </span>
                <div className="text-xs text-emerald-300/80 font-medium tracking-widest uppercase">DEFI INSURANCE</div>
              </div>
            </div>
            
            <nav className="hidden md:flex items-center space-x-8">
              {navItems.map(({ label, href }, index: number) => (
                <Link
                  key={label}
                  href={href}
                  className="text-white/70 hover:text-emerald-300 transition-all duration-500 relative group font-medium tracking-wide"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  {label}
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-emerald-400 to-green-300 transition-all duration-500 group-hover:w-full"></span>
                  <div className="absolute inset-0 bg-emerald-400/10 rounded-lg scale-0 group-hover:scale-100 transition-all duration-300 -z-10"></div>
                </Link>
              ))}
            </nav>

            <div className="flex items-center space-x-4">
              <button 
                type="button"
                className="bg-gradient-to-r from-emerald-400/90 to-green-500/90 backdrop-blur-xl text-black px-6 py-3 rounded-2xl font-bold hover:shadow-2xl hover:shadow-emerald-400/30 hover:scale-105 transition-all duration-500 border border-white/20 tracking-wide"
                onClick={() => alert('Wallet connection coming soon!')}
              >
                Wallet
              </button>
              <button 
                type="button"
                className="md:hidden p-2 text-green-400"
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                aria-label="Toggle menu"
              >
                {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="fixed inset-0 z-40 bg-black/95 backdrop-blur-xl md:hidden">
          <div className="flex flex-col items-center justify-center h-full space-y-8 text-xl">
            {navItems.map(({ label, href }) => (
              <Link key={label} href={href} className="text-gray-300 hover:text-green-400 transition-colors" onClick={() => setIsMenuOpen(false)}>
                {label}
              </Link>
            ))}
          </div>
        </div>
      )}

      {/* Content Container */}
      <div className="z-10 w-full">
        {/* Hero Section */}
        <div className="w-full py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col lg:flex-row gap-12 items-center">
              {/* Hero Content */}
              <div className="lg:w-1/2 space-y-8">
                <div className="space-y-6">
                  <h1 className="text-4xl md:text-5xl lg:text-6xl font-black leading-tight tracking-tight">
                    <span className="text-white/90 hover:text-white transition-colors duration-700">Protect Your</span><br />
                    <span className="text-white/90 hover:text-white transition-colors duration-700 delay-100">Crops with</span><br />
                    <span className="bg-gradient-to-r from-emerald-300 via-green-400 to-lime-400 bg-clip-text text-transparent animate-pulse">
                      DeFi Insurance
                    </span>
                  </h1>

                  <div className="space-y-4 transform hover:translate-x-2 transition-all duration-700">
                    <p className="text-lg md:text-xl text-white/70 leading-relaxed tracking-wide font-light">
                      Revolutionary parametric insurance connecting African farmers with global liquidity.
                    </p>
                    <p className="text-md text-emerald-200/80 leading-relaxed tracking-wide font-light">
                      Automated payouts, transparent pricing, instant M-Pesa settlements.
                    </p>
                  </div>
                </div>

                <div className="flex flex-col sm:flex-row gap-4 pt-4">
                  <button 
                    type="button"
                    className="group bg-gradient-to-r from-emerald-400/90 to-green-500/90 backdrop-blur-xl text-black px-8 py-4 rounded-2xl font-bold text-lg hover:shadow-2xl hover:shadow-emerald-400/40 transition-all duration-500 flex items-center justify-center space-x-3 border border-white/20 tracking-wide hover:scale-105"
                    onClick={() => alert('Insurance demo coming soon!')}
                  >
                    <Shield size={24} className="group-hover:rotate-12 transition-transform duration-500" />
                    <span>Protection</span>
                    <ArrowRight size={20} className="group-hover:translate-x-2 transition-transform duration-500" />
                  </button>
                  <button 
                    type="button"
                    className="border-2 border-white/30 bg-white/5 backdrop-blur-xl text-emerald-200 px-8 py-4 rounded-2xl font-bold text-lg hover:bg-white/10 hover:border-emerald-400/50 transition-all duration-500 tracking-wide hover:scale-105"
                    onClick={() => alert('Liquidity demo coming soon!')}
                  >
                    Liquidity
                  </button>
                </div>
              </div>

              {/* Dashboard Preview */}
              <div className="lg:w-1/2">
                <div className="relative group">
                  <div className="bg-white/10 backdrop-blur-3xl rounded-3xl border border-white/20 p-6 shadow-2xl shadow-black/20 hover:shadow-emerald-500/10 transition-all duration-700 hover:scale-105">
                    {/* Floating Glass Orbs */}
                    <div className="absolute -top-4 -right-4 w-8 h-8 bg-gradient-to-br from-emerald-400/60 to-green-500/60 backdrop-blur-xl rounded-full animate-bounce opacity-80 border border-white/20 shadow-xl"></div>
                    <div className="absolute -bottom-2 -left-2 w-6 h-6 bg-gradient-to-br from-lime-400/60 to-emerald-500/60 backdrop-blur-xl rounded-full animate-pulse opacity-70 border border-white/20 shadow-xl"></div>

                    {/* Weather Section */}
                    <div className="mb-6">
                      <div className="flex items-center justify-between mb-4">
                        <h3 className="text-lg font-bold text-white/90 flex items-center space-x-2 tracking-wide">
                          <Globe className="text-emerald-300 animate-pulse" size={20} />
                          <span>Global Weather</span>
                        </h3>
                        <div className="flex items-center space-x-2 bg-white/10 backdrop-blur-xl border border-white/20 px-3 py-1 rounded-full shadow-lg">
                          <div className="w-2 h-2 bg-emerald-400 rounded-full animate-pulse shadow-lg shadow-emerald-400/50"></div>
                          <span className="text-xs text-emerald-200 font-medium tracking-wide">{weatherData.risk}</span>
                        </div>
                      </div>
                      
                      <div className="grid grid-cols-2 gap-4">
                        <div className="flex items-center space-x-3 group">
                          <div className="w-12 h-12 bg-gradient-to-br from-orange-400/80 to-yellow-500/80 backdrop-blur-xl rounded-2xl flex items-center justify-center border border-white/20 shadow-xl group-hover:scale-110 transition-all duration-500">
                            <Sun className="text-white animate-pulse" size={20} />
                          </div>
                          <div className="group-hover:translate-x-1 transition-all duration-300">
                            <div className="text-2xl font-bold text-white/90 tracking-tight">{weatherData.temp}</div>
                            <div className="text-emerald-300 font-medium text-sm tracking-wide">{weatherData.condition}</div>
                          </div>
                        </div>
                        
                        <div className="space-y-2">
                          {weatherItems.slice(0, 3).map((item: WeatherItem, index: number) => (
                            <div 
                              key={index} 
                              className="flex items-center justify-between p-2 bg-white/10 backdrop-blur-xl rounded-lg border border-white/10 hover:border-emerald-400/30 transition-all duration-500 hover:scale-105"
                              style={{ animationDelay: `${index * 150}ms` }}
                            >
                              <div className="flex items-center space-x-2">
                                <item.icon size={14} className={`${item.color} animate-pulse`} />
                                <span className="text-xs text-white/70 tracking-wide">{item.label}</span>
                              </div>
                              <span className="font-medium text-white/90 text-xs tracking-wide">{item.value}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>

                    {/* Activity Feed */}
                    <div>
                      <div className="flex items-center space-x-2 mb-4">
                        <Activity size={18} className="text-emerald-300 animate-pulse" />
                        <h3 className="text-lg font-bold text-white/90 tracking-wide">Live Activity</h3>
                        <div className="w-2 h-2 bg-emerald-400 rounded-full animate-ping shadow-lg shadow-emerald-400/50"></div>
                      </div>
                      
                      <div className="space-y-2">
                        {activities.map((activity: Activity, index: number) => (
                          <div 
                            key={index} 
                            className="flex items-center justify-between p-3 bg-white/10 backdrop-blur-xl rounded-xl border border-white/10 hover:border-emerald-400/30 transition-all duration-500 hover:scale-105 group"
                            style={{ animationDelay: `${index * 200}ms` }}
                          >
                            <div className="flex items-center space-x-3">
                              <div className={`w-3 h-3 rounded-full ${getStatusColor(activity.status)} shadow-lg`}></div>
                              <div className="group-hover:translate-x-1 transition-all duration-300">
                                <span className="text-white/90 font-medium text-sm tracking-wide">{activity.type}</span>
                                <div className="text-xs text-white/50 tracking-wide">{activity.time}</div>
                              </div>
                            </div>
                            <span className="font-bold text-emerald-300 text-sm tracking-wide group-hover:scale-110 transition-all duration-300">{activity.amount}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Metrics Section */}
        <div className="w-full py-16 border-y border-white/10">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
              {metrics.map((metric: Metric, index: number) => {
                const Icon = metric.icon;
                const isActive = currentMetric === index;
                
                return (
                  <div 
                    key={index} 
                    className={`relative p-6 rounded-2xl border transition-all duration-700 group cursor-pointer ${
                      isActive
                        ? 'bg-white/15 backdrop-blur-3xl border-white/30 scale-105 shadow-2xl shadow-emerald-400/20' 
                        : 'bg-white/5 backdrop-blur-2xl border-white/10 hover:border-white/20 hover:bg-white/10'
                    }`}
                    style={{ animationDelay: `${index * 150}ms` }}
                  >
                    <div className={`w-12 h-12 rounded-2xl bg-gradient-to-r ${metric.color} backdrop-blur-xl flex items-center justify-center mb-4 border border-white/20 shadow-xl group-hover:scale-110 group-hover:rotate-3 transition-all duration-500`}>
                      <Icon size={20} className="text-black" />
                    </div>
                    <div className="text-3xl font-black text-white/90 mb-2 tracking-tight group-hover:scale-105 transition-all duration-300">{metric.value}</div>
                    <div className="text-sm text-white/60 tracking-wide font-light">{metric.label}</div>
                    {isActive && (
                      <div className="absolute inset-0 rounded-2xl border-2 border-emerald-400/50 animate-pulse shadow-lg shadow-emerald-400/20"></div>
                    )}
                    <div className="absolute inset-0 bg-gradient-to-tr from-emerald-400/10 via-transparent to-green-400/10 rounded-2xl opacity-0 group-hover:opacity-100 transition-all duration-500"></div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        {/* Features Section */}
        <div className="w-full py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl lg:text-5xl font-black text-white mb-6">
                <span className="bg-gradient-to-r from-green-400 to-emerald-500 bg-clip-text text-transparent">
                  Revolutionary
                </span> Insurance Protocol
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
                Leveraging WeatherXM oracles, smart contracts, and M-Pesa integration for seamless crop protection
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {features.map((feature: Feature, index: number) => (
                <div 
                  key={index} 
                  className={`group relative p-8 rounded-3xl bg-gradient-to-br ${feature.bgGradient} border border-green-500/20 hover:border-green-500/40 transition-all duration-500 hover:scale-105`}
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-green-500/5 to-transparent rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  
                  <div className={`relative w-20 h-20 bg-gradient-to-br ${feature.gradient} rounded-3xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300`}>
                    <feature.icon className="text-white" size={32} />
                  </div>
                  
                  <h3 className="text-2xl font-bold text-white mb-4 text-center">{feature.title}</h3>
                  <p className="text-gray-300 leading-relaxed text-center">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Contact Form Section - Place it here, between Features and CTA */}
        <ContactForm />

        {/* CTA Section */}
        <div className="w-full py-20 bg-gradient-to-r from-green-500/20 to-emerald-500/20">
          <div className="max-w-5xl mx-auto text-center px-4 sm:px-6 lg:px-8">
            <h2 className="text-4xl lg:text-5xl font-black text-white mb-8">
              Join the Future of{' '}
              <span className="bg-gradient-to-r from-green-400 to-emerald-500 bg-clip-text text-transparent">
                Agricultural Finance
              </span>
            </h2>

            <p className="text-xl text-gray-300 mb-12 max-w-3xl mx-auto">
              Thousands of farmers across Sub-Saharan Africa are already protected. Be part of the agricultural revolution.
            </p>

            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <button 
                type="button"
                className="border-2 border-green-500 text-green-400 px-10 py-5 rounded-xl font-bold text-lg hover:bg-green-500/10 transition-all duration-300 backdrop-blur-sm"
                onClick={() => alert('Documentation coming soon!')}
              >
                View Docs
              </button>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="w-full py-16 border-t border-green-500/20 bg-black/90 backdrop-blur-xl">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col md:flex-row items-center justify-between mb-12">
              <div className="flex items-center space-x-4 mb-6 md:mb-0">
                <img 
                  src="/micro.jpeg" 
                  alt="MicroCrop Logo" 
                  className="w-14 h-14 rounded-xl object-cover"
                />
                <div>
                  <span className="text-3xl font-black bg-gradient-to-r from-green-400 to-emerald-500 bg-clip-text text-transparent">
                    MicroCrop
                  </span>
                  <div className="text-sm text-green-400 font-bold">DEFI INSURANCE PROTOCOL</div>
                </div>
              </div>
              
              <div className="flex items-center space-x-8">
                {socialLinks.map((link: string) => (
                  <a key={link} href="#" className="text-gray-400 hover:text-green-400 transition-colors font-medium">
                    {link}
                  </a>
                ))}
              </div>
            </div>
            
            <div className="pt-8 border-t border-green-500/20 text-center">
              <p className="text-gray-400">
                © 2025 MicroCrop Protocol. 
                <span className="text-green-400 font-medium"> Revolutionizing agricultural insurance across Africa.</span>
              </p>
              <div className="mt-4 flex flex-col items-center gap-2 text-sm text-gray-500 md:flex-row md:justify-center">
                <Link href="/privacy-policy" className="text-green-400 hover:text-green-300 transition-colors font-medium">
                  Privacy Policy
                </Link>
                <span className="hidden md:inline text-gray-600">•</span>
                <Link href="/terms-of-service" className="text-green-400 hover:text-green-300 transition-colors font-medium">
                  Terms of Service
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}