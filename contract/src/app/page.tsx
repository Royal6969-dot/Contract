'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Badge } from '@/components/ui/badge';
import { ArrowRight, CheckCircle, Users, DollarSign, Smartphone, Shield, Target, TrendingUp, Clock, MapPin, Camera } from 'lucide-react';

export default function Home() {
  const [activeTab, setActiveTab] = useState('home');

  return (
    <div className="min-h-screen bg-black">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 bg-black/80 backdrop-blur-md border-b border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <div className="flex-shrink-0">
                <h1 className="text-2xl font-bold" style={{ color: '#0047ab' }}>CONTRACT</h1>
                <p className="text-xs" style={{ color: '#f5f5dc' }}>COMMITMENT MADE REAL</p>
              </div>
            </div>
            <div className="flex space-x-8">
              <button 
                onClick={() => setActiveTab('home')}
                className={`text-sm font-medium transition-colors ${
                  activeTab === 'home' ? 'text-[#f5f5dc]' : 'text-gray-400 hover:text-[#f5f5dc]'
                }`}
              >
                Home
              </button>
              <button 
                onClick={() => setActiveTab('howitworks')}
                className={`text-sm font-medium transition-colors ${
                  activeTab === 'howitworks' ? 'text-[#f5f5dc]' : 'text-gray-400 hover:text-[#f5f5dc]'
                }`}
              >
                How It Works
              </button>
              <button 
                onClick={() => setActiveTab('whitepaper')}
                className={`text-sm font-medium transition-colors ${
                  activeTab === 'whitepaper' ? 'text-[#f5f5dc]' : 'text-gray-400 hover:text-[#f5f5dc]'
                }`}
              >
                White Paper
              </button>
            </div>
            <Button className="bg-[#0047ab] hover:bg-[#003d8f] text-white" asChild>
              <a href="/signin">Sign in</a>
            </Button>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <main>
        {activeTab === 'home' ? (
          <div className="space-y-16">
            {/* Hero Section */}
            <section className="relative py-20 px-4 sm:px-6 lg:px-8">
              <div className="max-w-7xl mx-auto text-center">
                <Badge variant="secondary" className="mb-4 bg-gray-800 text-[#f5f5dc]">
                  <Smartphone className="w-4 h-4 mr-2" />
                  Coming Soon to App Store
                </Badge>
                <h1 className="text-4xl md:text-6xl font-bold mb-6" style={{ color: '#f5f5dc' }}>
                  Transform your <span style={{ color: '#0047ab' }}>commitments</span> into
                  <br />
                  <span style={{ color: '#0047ab' }}>real habits</span>
                </h1>
                <p className="text-xl mb-8 max-w-3xl mx-auto" style={{ color: '#f5f5dc' }}>
                  Smart contract platform that allows creating challenges between friends. 
                  Whoever doesn't meet what's established, loses. Simple, effective and motivating.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button size="lg" className="bg-[#0047ab] hover:bg-[#003d8f] text-white">
                    Join the waitlist
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Button>
                  <Button size="lg" variant="outline" className="border-[#f5f5dc] text-black hover:bg-[#f5f5dc] hover:text-black">
                    See how it works
                  </Button>
                </div>
              </div>
            </section>

            {/* How It Works */}
            <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-900">
              <div className="max-w-7xl mx-auto">
                <div className="text-center mb-12">
                  <h2 className="text-3xl md:text-4xl font-bold mb-4" style={{ color: '#f5f5dc' }}>
                    How it works?
                  </h2>
                  <p className="text-lg max-w-2xl mx-auto" style={{ color: '#0047ab' }}>
                    A simple yet powerful system that transforms intention into action
                  </p>
                </div>
                <div className="grid md:grid-cols-3 gap-8">
                  <Card className="text-center bg-black border-gray-800">
                    <CardHeader>
                      <div className="w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4" style={{ backgroundColor: '#0047ab' }}>
                        <Users className="w-6 h-6 text-white" />
                      </div>
                      <CardTitle style={{ color: '#f5f5dc' }}>Create the contract</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p style={{ color: '#0047ab' }}>
                        Define the challenge with your friends (e.g.: go to the gym 4 times a week). 
                        Each one establishes their specific days and times.
                      </p>
                    </CardContent>
                  </Card>
                  <Card className="text-center bg-black border-gray-800">
                    <CardHeader>
                      <div className="w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4" style={{ backgroundColor: '#f5f5dc' }}>
                        <Camera className="w-6 h-6 text-black" />
                      </div>
                      <CardTitle style={{ color: '#f5f5dc' }}>Verify with photos</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p style={{ color: '#0047ab' }}>
                        Receive notifications at the agreed time. Upload a photo with real-time 
                        location, similar to BeReal, but with consequences.
                      </p>
                    </CardContent>
                  </Card>
                  <Card className="text-center bg-black border-gray-800">
                    <CardHeader>
                      <div className="w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4" style={{ backgroundColor: '#006400' }}>
                        <DollarSign className="w-6 h-6 text-white" />
                      </div>
                      <CardTitle style={{ color: '#f5f5dc' }}>Evaluate and execute</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p style={{ color: '#0047ab' }}>
                        The group evaluates the evidence. If someone fails, penalties 
                        are automatically deducted from the collective fund.
                      </p>
                    </CardContent>
                  </Card>
                </div>
              </div>
            </section>

            {/* Business Model */}
            <section className="py-16 px-4 sm:px-6 lg:px-8">
              <div className="max-w-7xl mx-auto">
                <div className="text-center mb-12">
                  <h2 className="text-3xl md:text-4xl font-bold mb-4" style={{ color: '#f5f5dc' }}>
                    Revenue model
                  </h2>
                  <p className="text-lg max-w-2xl mx-auto" style={{ color: '#0047ab' }}>
                    A transparent and sustainable model
                  </p>
                </div>
                <div className="grid md:grid-cols-2 gap-8">
                  <Card className="bg-black border-gray-800">
                    <CardHeader>
                      <CardTitle className="flex items-center" style={{ color: '#f5f5dc' }}>
                        <DollarSign className="w-5 h-5 mr-2" style={{ color: '#0047ab' }} />
                        Commission per contract
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="mb-4" style={{ color: '#0047ab' }}>
                        Each contract requires participants to deposit money into the pot. 
                        The platform retains 5% as commission for:
                      </p>
                      <ul className="space-y-2">
                        <li className="flex items-center text-sm" style={{ color: '#f5f5dc' }}>
                          <CheckCircle className="w-4 h-4 mr-2" style={{ color: '#f5f5dc' }} />
                          System usage
                        </li>
                        <li className="flex items-center text-sm" style={{ color: '#f5f5dc' }}>
                          <CheckCircle className="w-4 h-4 mr-2" style={{ color: '#f5f5dc' }} />
                          Transparency
                        </li>
                        <li className="flex items-center text-sm" style={{ color: '#f5f5dc' }}>
                          <CheckCircle className="w-4 h-4 mr-2" style={{ color: '#f5f5dc' }} />
                          Automation
                        </li>
                      </ul>
                      <div className="mt-4 p-3 rounded-lg" style={{ backgroundColor: '#1a1a1a' }}>
                        <p className="text-sm font-medium" style={{ color: '#f5f5dc' }}>
                          Example: 4 attendances/week × $10 × 4 weeks = $160 per user
                        </p>
                      </div>
                    </CardContent>
                  </Card>
                  <Card className="bg-black border-gray-800">
                    <CardHeader>
                      <CardTitle className="flex items-center" style={{ color: '#f5f5dc' }}>
                        <TrendingUp className="w-5 h-5 mr-2" style={{ color: '#0047ab' }} />
                        Own cryptocurrency (future)
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="mb-4" style={{ color: '#0047ab' }}>
                        We will launch a utility token for:
                      </p>
                      <ul className="space-y-2">
                        <li className="flex items-center text-sm" style={{ color: '#f5f5dc' }}>
                          <CheckCircle className="w-4 h-4 mr-2" style={{ color: '#0047ab' }} />
                          Participate in DAO decisions
                        </li>
                        <li className="flex items-center text-sm" style={{ color: '#f5f5dc' }}>
                          <CheckCircle className="w-4 h-4 mr-2" style={{ color: '#0047ab' }} />
                          Receive benefits for holding
                        </li>
                        <li className="flex items-center text-sm" style={{ color: '#f5f5dc' }}>
                          <CheckCircle className="w-4 h-4 mr-2" style={{ color: '#0047ab' }} />
                          2% to holders, 2% to developers, 1% to marketing
                        </li>
                      </ul>
                      <Badge variant="secondary" className="mt-4 bg-gray-800 text-[#f5f5dc]">
                        Post-launch
                      </Badge>
                    </CardContent>
                  </Card>
                </div>
              </div>
            </section>

            {/* What Makes It Different */}
            <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-900">
              <div className="max-w-7xl mx-auto">
                <div className="text-center mb-12">
                  <h2 className="text-3xl md:text-4xl font-bold mb-4" style={{ color: '#f5f5dc' }}>
                    What makes us different?
                  </h2>
                  <p className="text-lg max-w-2xl mx-auto" style={{ color: '#0047ab' }}>
                    The perfect combination of technology, community, and real consequences
                  </p>
                </div>
                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                  <Card className="text-center bg-black border-gray-800">
                    <CardHeader>
                      <div className="w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4" style={{ backgroundColor: '#f5f5dc' }}>
                        <Target className="w-6 h-6 text-black" />
                      </div>
                      <CardTitle className="text-lg" style={{ color: '#f5f5dc' }}>Real gamification</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-sm" style={{ color: '#0047ab' }}>
                        Turns personal commitment into a game with real financial consequences
                      </p>
                    </CardContent>
                  </Card>
                  <Card className="text-center bg-black border-gray-800">
                    <CardHeader>
                      <div className="w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4" style={{ backgroundColor: '#0047ab' }}>
                        <Users className="w-6 h-6 text-white" />
                      </div>
                      <CardTitle className="text-lg" style={{ color: '#f5f5dc' }}>Social verification</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-sm" style={{ color: '#0047ab' }}>
                        The group collectively decides if a breach is valid or not
                      </p>
                    </CardContent>
                  </Card>
                  <Card className="text-center bg-black border-gray-800">
                    <CardHeader>
                      <div className="w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4" style={{ backgroundColor: '#f5f5dc' }}>
                        <Shield className="w-6 h-6 text-black" />
                      </div>
                      <CardTitle className="text-lg" style={{ color: '#f5f5dc' }}>No trust needed</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-sm" style={{ color: '#0047ab' }}>
                        Everything is recorded, verified, and executed automatically through smart contracts
                      </p>
                    </CardContent>
                  </Card>
                  <Card className="text-center bg-black border-gray-800">
                    <CardHeader>
                      <div className="w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4" style={{ backgroundColor: '#0047ab' }}>
                        <Clock className="w-6 h-6 text-white" />
                      </div>
                      <CardTitle className="text-lg" style={{ color: '#f5f5dc' }}>Fully scalable</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-sm" style={{ color: '#0047ab' }}>
                        Applicable to any type of challenge: gym, study, work, personal habits
                      </p>
                    </CardContent>
                  </Card>
                </div>
              </div>
            </section>

            {/* Impact */}
            <section className="py-16 px-4 sm:px-6 lg:px-8">
              <div className="max-w-4xl mx-auto text-center">
                <h2 className="text-3xl md:text-4xl font-bold mb-4" style={{ color: '#f5f5dc' }}>
                  Our impact
                </h2>
                <p className="text-lg mb-8" style={{ color: '#0047ab' }}>
                  We help people turn self-discipline into a collective game, 
                  using financial incentives and social pressure to generate sustainable habits 
                  and real commitment.
                </p>
                <div className="rounded-2xl p-8" style={{ background: 'linear-gradient(135deg, #0047ab 0%, #f5f5dc 100%)' }}>
                  <blockquote className="text-2xl font-medium mb-4 text-white">
                    "We transform intention into action, and motivation into results."
                  </blockquote>
                  <p className="text-white/80">
                    Discipline as a service
                  </p>
                </div>
              </div>
            </section>

            {/* CTA Section */}
            <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-900">
              <div className="max-w-4xl mx-auto text-center">
                <h2 className="text-3xl md:text-4xl font-bold mb-4" style={{ color: '#f5f5dc' }}>
                  Ready to transform your habits?
                </h2>
                <p className="text-lg mb-8" style={{ color: '#0047ab' }}>
                  Join thousands of people who are already building solid routines 
                  through commitment and technology.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button size="lg" className="bg-[#f5f5dc] hover:bg-[#e6e6cc] text-black">
                    Join the waitlist
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Button>
                  <Button size="lg" variant="outline" className="border-[#0047ab] text-[#0047ab] hover:bg-[#0047ab] hover:text-white">
                    Learn more
                  </Button>
                </div>
              </div>
            </section>
          </div>
        ) : activeTab === 'howitworks' ? (
          /* How It Works Tab */
          <div className="py-16 px-4 sm:px-6 lg:px-8">
            <div className="max-w-7xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-bold mb-4" style={{ color: '#f5f5dc' }}>
                  🔄 How CONTRACT Works
                </h2>
                <p className="text-lg max-w-2xl mx-auto" style={{ color: '#0047ab' }}>
                  The complete workflow from creation to execution
                </p>
              </div>
              
              <div className="grid md:grid-cols-3 gap-8">
                {/* Pre-Contract */}
                <Card className="bg-black border-gray-800">
                  <CardHeader>
                    <CardTitle className="flex items-center" style={{ color: '#f5f5dc' }}>
                      🛠️ Pre-Contract
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="mb-4" style={{ color: '#f5f5dc' }}>
                      A user creates a new contract and becomes the admin.
                    </p>
                    <p className="mb-4" style={{ color: '#f5f5dc' }}>
                      The admin sets:
                    </p>
                    <ul className="space-y-2 mb-4" style={{ color: '#0047ab' }}>
                      <li className="flex items-start">
                        <span className="mr-2">•</span>
                        Contract duration (in months)
                      </li>
                      <li className="flex items-start">
                        <span className="mr-2">•</span>
                        Frequency of the challenge (times per month)
                      </li>
                      <li className="flex items-start">
                        <span className="mr-2">•</span>
                        Penalty amount for missed challenge days
                      </li>
                    </ul>
                    <p style={{ color: '#f5f5dc' }}>
                      The admin invites other users. The contract can only begin once at least 3 members are in (including the admin), to ensure group validation.
                    </p>
                  </CardContent>
                </Card>

                {/* Post-Contract Activation */}
                <Card className="bg-black border-gray-800">
                  <CardHeader>
                    <CardTitle className="flex items-center" style={{ color: '#f5f5dc' }}>
                      📅 Post-Contract Activation
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="mb-4" style={{ color: '#f5f5dc' }}>
                      Each member sets their own days and times to complete the challenge (e.g., gym sessions).
                    </p>
                    <p style={{ color: '#f5f5dc' }}>
                      Once all members configure their schedules, the CONTRACT chat opens and the challenge begins.
                    </p>
                  </CardContent>
                </Card>

                {/* Daily Validation */}
                <Card className="bg-black border-gray-800">
                  <CardHeader>
                    <CardTitle className="flex items-center" style={{ color: '#f5f5dc' }}>
                      📸 Daily Validation
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="mb-4" style={{ color: '#f5f5dc' }}>
                      On each scheduled challenge day:
                    </p>
                    <ul className="space-y-2 mb-4" style={{ color: '#0047ab' }}>
                      <li className="flex items-start">
                        <span className="mr-2">•</span>
                        Members receive a notification at their chosen time.
                      </li>
                      <li className="flex items-start">
                        <span className="mr-2">•</span>
                        They have 3 minutes to upload a photo with live location as proof of compliance.
                      </li>
                      <li className="flex items-start">
                        <span className="mr-2">•</span>
                        All members can view each other's photos and vote (approve or disapprove).
                      </li>
                      <li className="flex items-start">
                        <span className="mr-2">•</span>
                        If a user doesn't submit, or receives more dislikes than likes, it's marked as a failed task and a penalty is applied.
                      </li>
                    </ul>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        ) : (
          /* White Paper Tab */
          <div className="py-16 px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-12">
                <h1 className="text-4xl font-bold mb-4" style={{ color: '#f5f5dc' }}>White Paper</h1>
                <p className="text-lg" style={{ color: '#0047ab' }}>
                  Technical documentation and vision of the CONTRACT project
                </p>
              </div>
              
              <Card className="mb-8 bg-black border-gray-800">
                <CardHeader>
                  <CardTitle style={{ color: '#f5f5dc' }}>Coming Soon</CardTitle>
                </CardHeader>
                <CardContent>
                  <p style={{ color: '#0047ab' }}>
                    The complete white paper will be available soon. Here you will find detailed information about:
                  </p>
                  <ul className="mt-4 space-y-2" style={{ color: '#f5f5dc' }}>
                    <li className="flex items-center">
                      <CheckCircle className="w-4 h-4 mr-2" style={{ color: '#f5f5dc' }} />
                      Technical architecture of the platform
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="w-4 h-4 mr-2" style={{ color: '#f5f5dc' }} />
                      Smart contract design
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="w-4 h-4 mr-2" style={{ color: '#f5f5dc' }} />
                      Economic model and tokenomics
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="w-4 h-4 mr-2" style={{ color: '#f5f5dc' }} />
                      Roadmap and future development
                    </li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="bg-black border-gray-800">
                <CardHeader>
                  <CardTitle style={{ color: '#f5f5dc' }}>Want to be notified?</CardTitle>
                  <CardDescription style={{ color: '#0047ab' }}>
                    Leave us your email and we'll notify you when the white paper is available
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex gap-4">
                    <input 
                      type="email" 
                      placeholder="your@email.com" 
                      className="flex-1 px-4 py-2 border border-gray-700 rounded-lg focus:outline-none focus:ring-2 bg-black text-white"
                      style={{ focusRingColor: '#f5f5dc' }}
                    />
                    <Button className="bg-[#0047ab] hover:bg-[#003d8f] text-white">
                      Notify me
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        )}
      </main>

      {/* Footer */}
      <footer className="bg-black py-12 px-4 sm:px-6 lg:px-8 border-t border-gray-800">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-xl font-bold mb-4" style={{ color: '#f5f5dc' }}>CONTRACT</h3>
              <p className="text-sm" style={{ color: '#0047ab' }}>
                COMMITMENT MADE REAL
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-4" style={{ color: '#f5f5dc' }}>Product</h4>
              <ul className="space-y-2 text-sm" style={{ color: '#0047ab' }}>
                <li>How it works</li>
                <li>Features</li>
                <li>Pricing</li>
                <li>Security</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4" style={{ color: '#f5f5dc' }}>Company</h4>
              <ul className="space-y-2 text-sm" style={{ color: '#0047ab' }}>
                <li>About</li>
                <li>Blog</li>
                <li>Careers</li>
                <li>Contact</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4" style={{ color: '#f5f5dc' }}>Legal</h4>
              <ul className="space-y-2 text-sm" style={{ color: '#0047ab' }}>
                <li>Terms of service</li>
                <li>Privacy policy</li>
                <li>White Paper</li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-sm" style={{ color: '#0047ab' }}>
            <p>&copy; 2024 CONTRACT. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}