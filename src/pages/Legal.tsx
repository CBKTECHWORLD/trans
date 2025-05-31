import React from 'react';
import { Shield, Mail, Phone, FileText, Users, Lock, Globe, CheckCircle } from 'lucide-react';

const Legal: React.FC = () => {
    return (
        <div className="min-h-screen bg-gray-50">
            {/* Header */}
            <div className="bg-blue-900 text-white py-12">
                <div className="max-w-4xl mx-auto px-6">
                    <div className="flex items-center gap-3 mb-4">
                        <Shield className="w-8 h-8" />
                        <h1 className="text-3xl font-bold">Privacy Policy</h1>
                    </div>
                    <p className="text-blue-100 text-lg">
                        Your privacy and data protection are our top priorities
                    </p>
                    <p className="text-blue-200 text-sm mt-2">
                        Last Updated: May 30, 2025
                    </p>
                </div>
            </div>

            {/* Main Content */}
            <div className="max-w-4xl mx-auto px-6 py-12">
                {/* Introduction */}
                <div className="bg-white rounded-lg shadow-sm p-8 mb-8">
                    <p className="text-gray-700 leading-relaxed">
                        Transitley (referred to as "we," "us," or "our"), headquartered at Manchester, UK, with a presence in India,
                        is committed to protecting your personal data in compliance with the UK General Data Protection Regulation (GDPR),
                        the UK Data Protection Act 2018, the Privacy and Electronic Communications Regulations (PECR), and India's
                        Digital Personal Data Protection Act, 2023 (DPDP Act). This Privacy Policy explains how we collect, use, store,
                        and protect your personal data when you use our website (https://transitley.com/) or our immigration services.
                    </p>
                </div>

                {/* Section 1: Data We Collect */}
                <div className="bg-white rounded-lg shadow-sm p-8 mb-8">
                    <div className="flex items-center gap-3 mb-6">
                        <FileText className="w-6 h-6 text-blue-600" />
                        <h2 className="text-2xl font-semibold text-gray-900">1. Data We Collect</h2>
                    </div>
                    <p className="text-gray-700 mb-4">We may collect the following personal data:</p>
                    <div className="space-y-4">
                        <div className="flex items-start gap-3">
                            <CheckCircle className="w-5 h-5 text-green-500 mt-1 flex-shrink-0" />
                            <div>
                                <span className="font-medium text-gray-900">Personal Information:</span>
                                <span className="text-gray-700"> Name, email address, phone number, date of birth, nationality, passport details, and other identification data provided during visa or immigration applications.</span>
                            </div>
                        </div>
                        <div className="flex items-start gap-3">
                            <CheckCircle className="w-5 h-5 text-green-500 mt-1 flex-shrink-0" />
                            <div>
                                <span className="font-medium text-gray-900">Immigration-Related Data:</span>
                                <span className="text-gray-700"> Visa status, application history, employment details, and educational qualifications.</span>
                            </div>
                        </div>
                        <div className="flex items-start gap-3">
                            <CheckCircle className="w-5 h-5 text-green-500 mt-1 flex-shrink-0" />
                            <div>
                                <span className="font-medium text-gray-900">Technical Data:</span>
                                <span className="text-gray-700"> IP address, browser type, device information, and usage data collected via cookies (see our Cookie Policy).</span>
                            </div>
                        </div>
                        <div className="flex items-start gap-3">
                            <CheckCircle className="w-5 h-5 text-green-500 mt-1 flex-shrink-0" />
                            <div>
                                <span className="font-medium text-gray-900">Dependants' Data:</span>
                                <span className="text-gray-700"> Information about family members or dependants included in immigration applications (e.g., names, ages, English language proficiency).</span>
                            </div>
                        </div>
                        <div className="flex items-start gap-3">
                            <CheckCircle className="w-5 h-5 text-green-500 mt-1 flex-shrink-0" />
                            <div>
                                <span className="font-medium text-gray-900">Financial Data:</span>
                                <span className="text-gray-700"> Payment details for services, such as credit card or bank account information.</span>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Section 2: How We Collect Data */}
                <div className="bg-white rounded-lg shadow-sm p-8 mb-8">
                    <div className="flex items-center gap-3 mb-6">
                        <Users className="w-6 h-6 text-blue-600" />
                        <h2 className="text-2xl font-semibold text-gray-900">2. How We Collect Data</h2>
                    </div>
                    <p className="text-gray-700 mb-4">We collect data:</p>
                    <div className="space-y-3">
                        <div className="flex items-start gap-3">
                            <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                            <p className="text-gray-700">When you submit forms or applications on our website.</p>
                        </div>
                        <div className="flex items-start gap-3">
                            <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                            <p className="text-gray-700">Through cookies and similar technologies (see Cookie Policy).</p>
                        </div>
                        <div className="flex items-start gap-3">
                            <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                            <p className="text-gray-700">During communications via email, phone, or in-person consultations.</p>
                        </div>
                        <div className="flex items-start gap-3">
                            <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                            <p className="text-gray-700">From third parties, such as UK Visas and Immigration (UKVI), immigration agents, or educational institutions, with your consent or as required by law.</p>
                        </div>
                    </div>
                </div>

                {/* Section 3: Lawful Basis for Processing */}
                <div className="bg-white rounded-lg shadow-sm p-8 mb-8 text-gray-700">
                    <div className="flex items-center gap-3 mb-6">
                        <Lock className="w-6 h-6 text-blue-600" />
                        <h2 className="text-2xl font-semibold text-gray-900">3. Lawful Basis for Processing</h2>
                    </div>
                    <div className="space-y-6">
                        <div>
                            <h3 className="text-lg font-medium text-gray-900 mb-3">GDPR (UK): We process data based on:</h3>
                            <div className="space-y-2 ml-4">
                                <div><span className="font-medium">Consent:</span> For marketing communications and non-essential cookies.</div>
                                <div><span className="font-medium">Contractual Necessity:</span> To provide immigration services or process visa applications.</div>
                                <div><span className="font-medium">Legal Obligation:</span> To comply with UKVI requirements, such as sponsor licence compliance or reporting.</div>
                                <div><span className="font-medium">Legitimate Interests:</span> For website analytics, fraud prevention, and service improvement.</div>
                            </div>
                        </div>
                        <div>
                            <h3 className="text-lg font-medium text-gray-900 mb-3">DPDP Act (India):</h3>
                            <p className="text-gray-700 ml-4">
                                We obtain explicit, freely given, informed, and specific consent from Indian users for data processing
                                and cross-border transfers. You may withdraw consent at any time.
                            </p>
                        </div>
                    </div>
                </div>

                {/* Section 4: Purpose of Processing */}
                <div className="bg-white rounded-lg shadow-sm p-8 mb-8">
                    <div className="flex items-center gap-3 mb-6">
                        <Globe className="w-6 h-6 text-blue-600" />
                        <h2 className="text-2xl font-semibold text-gray-900">4. Purpose of Processing</h2>
                    </div>
                    <p className="text-gray-700 mb-4">We use your data to:</p>
                    <div className="grid md:grid-cols-2 gap-4">
                        <div className="space-y-3">
                            <div className="flex items-start gap-3">
                                <CheckCircle className="w-5 h-5 text-green-500 mt-1 flex-shrink-0" />
                                <p className="text-gray-700">Process and manage immigration and visa applications.</p>
                            </div>
                            <div className="flex items-start gap-3">
                                <CheckCircle className="w-5 h-5 text-green-500 mt-1 flex-shrink-0" />
                                <p className="text-gray-700">Comply with UKVI requirements, including monitoring application status and reporting.</p>
                            </div>
                            <div className="flex items-start gap-3">
                                <CheckCircle className="w-5 h-5 text-green-500 mt-1 flex-shrink-0" />
                                <p className="text-gray-700">Provide personalized immigration advice and services.</p>
                            </div>
                        </div>
                        <div className="space-y-3">
                            <div className="flex items-start gap-3">
                                <CheckCircle className="w-5 h-5 text-green-500 mt-1 flex-shrink-0" />
                                <p className="text-gray-700">Improve our website and services through analytics.</p>
                            </div>
                            <div className="flex items-start gap-3">
                                <CheckCircle className="w-5 h-5 text-green-500 mt-1 flex-shrink-0" />
                                <p className="text-gray-700">Communicate updates, promotions, or service-related information (with consent).</p>
                            </div>
                            <div className="flex items-start gap-3">
                                <CheckCircle className="w-5 h-5 text-green-500 mt-1 flex-shrink-0" />
                                <p className="text-gray-700">Ensure security and prevent fraud.</p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Section 5: Data Sharing */}
                <div className="bg-white rounded-lg shadow-sm p-8 mb-8">
                    <h2 className="text-2xl font-semibold text-gray-900 mb-6">5. Data Sharing</h2>
                    <p className="text-gray-700 mb-4">We may share your data with:</p>
                    <div className="space-y-3">
                        <div className="p-4 bg-blue-50 rounded-lg">
                            <span className="font-medium text-gray-900">UK Home Office/UKVI:</span>
                            <span className="text-gray-700"> To comply with immigration compliance requirements.</span>
                        </div>
                        <div className="p-4 bg-blue-50 rounded-lg">
                            <span className="font-medium text-gray-900">Immigration Agents:</span>
                            <span className="text-gray-700"> Registered with the Office of the Immigration Services Commissioner (OISC) or approved bodies, under strict contractual terms.</span>
                        </div>
                        <div className="p-4 bg-blue-50 rounded-lg">
                            <span className="font-medium text-gray-900">Service Providers:</span>
                            <span className="text-gray-700"> IT providers, payment processors, and analytics services, subject to GDPR and DPDP Act safeguards.</span>
                        </div>
                        <div className="p-4 bg-blue-50 rounded-lg">
                            <span className="font-medium text-gray-900">Indian Authorities:</span>
                            <span className="text-gray-700"> As required by the DPDP Act for Indian users' data.</span>
                        </div>
                        <div className="p-4 bg-blue-50 rounded-lg">
                            <span className="font-medium text-gray-900">Other Parties:</span>
                            <span className="text-gray-700"> With your consent or as required by law (e.g., law enforcement, fraud prevention agencies).</span>
                        </div>
                    </div>
                    <p className="text-gray-700 mt-4 p-4 bg-yellow-50 rounded-lg border-l-4 border-yellow-400">
                        For cross-border data transfers (e.g., UK to India), we use UK-approved International Data Transfer Agreements
                        or equivalent safeguards under the DPDP Act.
                    </p>
                </div>

                {/* Section 6: Data Retention */}
                <div className="bg-white rounded-lg shadow-sm p-8 mb-8">
                    <h2 className="text-2xl font-semibold text-gray-900 mb-6">6. Data Retention</h2>
                    <div className="space-y-4">
                        <div className="flex items-start gap-3">
                            <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                            <p className="text-gray-700">
                                We retain personal data for as long as necessary to fulfill the purposes outlined, typically up to 6 months
                                post-service for UKVI compliance and tax purposes.
                            </p>
                        </div>
                        <div className="flex items-start gap-3">
                            <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                            <p className="text-gray-700">
                                Indian users' data is retained as per DPDP Act requirements, with deletion upon withdrawal of consent unless legally required.
                            </p>
                        </div>
                        <div className="flex items-start gap-3">
                            <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                            <p className="text-gray-700">
                                Data in backup archives is securely stored and isolated until deletion is possible.
                            </p>
                        </div>
                    </div>
                </div>

                {/* Section 7: Your Rights */}
                <div className="bg-white rounded-lg shadow-sm p-8 mb-8 text-gray-700 ">
                    <h2 className="text-2xl font-semibold text-gray-900 mb-6">7. Your Rights</h2>
                    <div className="grid md:grid-cols-2 gap-6">
                        <div className="p-6 bg-gradient-to-br from-blue-50 to-blue-100 rounded-lg">
                            <h3 className="text-lg font-medium text-gray-900 mb-3">GDPR (UK)</h3>
                            <p className="text-gray-700 mb-3">You have the right to:</p>
                            <div className="space-y-2 text-sm">
                                <div>• Access, rectify, or erase your data</div>
                                <div>• Restrict or object to processing</div>
                                <div>• Data portability</div>
                                <div>• Lodge complaints with the UK Information Commissioner's Office (ICO)</div>
                            </div>
                        </div>
                        <div className="p-6 bg-gradient-to-br from-green-50 to-green-100 rounded-lg">
                            <h3 className="text-lg font-medium text-gray-900 mb-3">DPDP Act (India)</h3>
                            <p className="text-gray-700 mb-3">Indian users have the right to:</p>
                            <div className="space-y-2 text-sm">
                                <div>• Access, correct, or erase data</div>
                                <div>• Withdraw consent at any time</div>
                                <div>• Nominate a representative for data rights</div>
                                <div>• File grievances with our Data Protection Officer or the Data Protection Board of India</div>
                            </div>
                        </div>
                    </div>
                    <p className="text-gray-700 mt-4 text-center">
                        To exercise your rights, contact our Data Protection Officer (details below).
                    </p>
                </div>

                {/* Section 8: Data Security */}
                <div className="bg-white rounded-lg shadow-sm p-8 mb-8">
                    <h2 className="text-2xl font-semibold text-gray-900 mb-6">8. Data Security</h2>
                    <p className="text-gray-700">
                        We use encryption, access controls, and regular security audits to protect your data. We comply with UKVI's
                        compliance requirements and DPDP Act security standards.
                    </p>
                </div>

                {/* Section 9: Cross-Border Data Transfers */}
                <div className="bg-white rounded-lg shadow-sm p-8 mb-8">
                    <h2 className="text-2xl font-semibold text-gray-900 mb-6">9. Cross-Border Data Transfers</h2>
                    <p className="text-gray-700">
                        Data may be transferred between the UK and India. We ensure compliance with GDPR (using standard contractual clauses)
                        and DPDP Act (with explicit consent for Indian users).
                    </p>
                </div>

                {/* Section 10: Contact Us */}
                <div className="bg-white rounded-lg shadow-sm p-8 mb-8">
                    <div className="flex items-center gap-3 mb-6">
                        <Mail className="w-6 h-6 text-blue-600" />
                        <h2 className="text-2xl font-semibold text-gray-900">10. Contact Us</h2>
                    </div>
                    <p className="text-gray-700 mb-6">
                        For questions, grievances, or to exercise your rights, contact our Data Protection Officer:
                    </p>
                    <div className="grid md:grid-cols-2 gap-6">
                        <div className="p-6 bg-gray-50 rounded-lg">
                            <h3 className="font-medium text-gray-900 mb-4">Data Protection Officer</h3>
                            <div className="space-y-3">
                                <div className="flex items-center gap-3">
                                    <Mail className="w-5 h-5 text-gray-500" />
                                    <a href="mailto:dpo@transitley.com" className="text-blue-600 hover:text-blue-800">
                                        dpo@transitley.com
                                    </a>
                                </div>
                                <div className="flex items-center gap-3">
                                    <Phone className="w-5 h-5 text-gray-500" />
                                    <div className="text-gray-700">
                                        <div>+44 (0)7552426454 (UK)</div>
                                        <div>+91 9600616051 (India)</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="p-6 bg-gray-50 rounded-lg">
                            <h3 className="font-medium text-gray-900 mb-4">India Grievance</h3>
                            <div className="space-y-3">
                                {/* <div className="text-gray-700">Bala krishnan</div> */}
                                <div className="flex items-center gap-3">
                                    <Mail className="w-5 h-5 text-gray-500" />
                                    <a href="mailto:grievance@transitley.com" className="text-blue-600 hover:text-blue-800">
                                        grievance@transitley.com
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Section 11: Changes to This Policy */}
                <div className="bg-white rounded-lg shadow-sm p-8 mb-8">
                    <h2 className="text-2xl font-semibold text-gray-900 mb-6">11. Changes to This Policy</h2>
                    <p className="text-gray-700">
                        We may update this policy to reflect changes in UK or Indian laws. Check this page regularly for updates.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Legal;