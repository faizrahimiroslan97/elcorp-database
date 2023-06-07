// app/utils/proposals.server.js

import { prisma } from "./prisma.server";

export const createProposal = async (proposal) => {
  const newProposal = await prisma.proposal.create({
    data: {
      title: proposal.title,
      desc: proposal.desc,
      proposal: {
        fileName: proposal.fileName,
      },
    },
  });
  return { id: newProposal.id, title: proposal.title };
};
