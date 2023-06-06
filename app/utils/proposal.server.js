// app/utils/proposal.server.js

import { prisma } from "./prisma.server";

export const createProposal = async (proposal) => {
  const newProposal = await prisma.proposal.create({
    data: {
      name: proposal.name,
      desc: proposal.desc,
      proposal: {
        fileName: proposal.fileName,
      },
    },
  });
  return { id: newProposal.id, name: proposal.name };
};
