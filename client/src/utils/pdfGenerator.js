import { jsPDF } from 'jspdf';
import autoTable from 'jspdf-autotable';

export const generateLeadProposalPDF = (lead, proposalData) => {
  const doc = new jsPDF();
  
  // Brand Colors
  const primaryColor = [108, 99, 255]; // #6C63FF
  const goldColor = [212, 175, 55];    // #D4AF37

  // Header
  doc.setFillColor(...primaryColor);
  doc.rect(0, 0, 210, 40, 'F');
  
  doc.setTextColor(255, 255, 255);
  doc.setFontSize(24);
  doc.setFont('helvetica', 'bold');
  doc.text('Bizzybee Technology', 20, 25);
  
  doc.setFontSize(10);
  doc.text('Premium AI Growth Agency', 20, 32);
  
  // Proposal Title
  doc.setTextColor(0, 0, 0);
  doc.setFontSize(20);
  doc.text('Growth Strategy Proposal', 20, 60);
  
  doc.setFontSize(12);
  doc.setFont('helvetica', 'normal');
  doc.text(`Prepared for: ${lead.name}`, 20, 70);
  doc.text(`Industry: ${lead.businessType}`, 20, 77);
  doc.text(`Date: ${new Date().toLocaleDateString()}`, 20, 84);

  // AI Insights Section
  doc.setDrawColor(...goldColor);
  doc.line(20, 95, 190, 95);
  
  doc.setFontSize(16);
  doc.setFont('helvetica', 'bold');
  doc.text('AI Recommended Strategy', 20, 110);
  
  doc.setFontSize(11);
  doc.setFont('helvetica', 'normal');
  const splitStrategy = doc.splitTextToSize(proposalData.Roadmap || proposalData.strategy || lead.aiStrategy || 'Loading strategy...', 170);
  doc.text(splitStrategy, 20, 120);

  // SWOT or Roadmap Table
  if (proposalData.roadmap || proposalData.Roadmap) {
      // Logic for adding a table if roadmap exists
  }

  // Pricing Tiers
  doc.setFontSize(16);
  doc.setFont('helvetica', 'bold');
  doc.text('Investment Tiers', 20, 180);
  
  autoTable(doc, {
    startY: 190,
    head: [['Tier', 'Services', 'Monthly Investment']],
    body: [
      ['Silver', 'Basic SEO, Social Management', '$1,500'],
      ['Gold', 'Full Ads Management, AI Bot', '$3,500'],
      ['Platinum', 'Custom AI Agents, Scaled Growth', '$7,500'],
    ],
    headStyles: { fillStyle: 'F', fillColor: primaryColor },
    alternateRowStyles: { fillColor: [245, 245, 245] }
  });

  // Footer
  doc.setFontSize(10);
  doc.setTextColor(150, 150, 150);
  doc.text('Bizzybee Technology | www.bizzybee.ai | grow@bizzybee.ai', 105, 285, { align: 'center' });

  // Save
  doc.save(`Bizzybee_Proposal_${lead.name.replace(/\s+/g, '_')}.pdf`);
};
